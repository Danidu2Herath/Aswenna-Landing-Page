import { useEffect, useRef } from "react";
import "./background.css";

/* --------------------------------------------------------------------------
   Reading the look out of the stylesheet
   -------------------------------------------------------------------------- */

type Theme = {
  nodeRgb: string; linkRgb: string; activeRgb: string; glowRgb: string;
  nodeAlpha: number; linkAlpha: number; activeAlpha: number; glowAlpha: number;
  density: number; linkDist: number; reach: number; pull: number; pulseMs: number;
};

/** Every value the mesh draws with comes from variables.css, so the palette stays in one place. */
function readTheme(el: HTMLElement): Theme {
  const cs = getComputedStyle(el);
  const str = (name: string, fallback: string) => cs.getPropertyValue(name).trim() || fallback;
  const num = (name: string, fallback: number) => {
    const parsed = Number.parseFloat(cs.getPropertyValue(name));
    return Number.isFinite(parsed) ? parsed : fallback;
  };
  return {
    nodeRgb: str("--mesh-node-rgb", "29, 78, 43"),
    linkRgb: str("--mesh-link-rgb", "47, 124, 71"),
    activeRgb: str("--mesh-active-rgb", "47, 124, 71"),
    glowRgb: str("--mesh-glow-rgb", "47, 124, 71"),
    nodeAlpha: num("--mesh-node-alpha", 0.3),
    linkAlpha: num("--mesh-link-alpha", 0.17),
    activeAlpha: num("--mesh-active-alpha", 0.85),
    glowAlpha: num("--mesh-glow-alpha", 0.11),
    density: num("--mesh-density", 22000),
    linkDist: num("--mesh-link-dist", 132),
    reach: num("--mesh-reach", 230),
    pull: num("--mesh-pull", 16),
    pulseMs: num("--mesh-pulse-ms", 1500),
  };
}

type Node = {
  x: number; y: number;   // drifting base position
  vx: number; vy: number; // drift velocity, px per frame at 60fps
  r: number;              // base radius
  rx: number; ry: number; // rendered position, after leaning towards the cursor
  wake: number;           // 0..1, how awake this node is
};

type Ripple = { x: number; y: number; born: number };
/** A node briefly ringing to suggest a reading being sent to the gateway. */
type Pulse = { node: number; born: number };

const RIPPLE_MS = 900;
const PULSE_MS = 1400;

/** Keeps animation progress inside 0..1 so a radius can never go negative. */
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

/**
 * The page's ambient background: the field photograph under a light scrim, a
 * faint dot grid, and over them a field of sensor nodes that drift slowly and
 * link to their neighbours, drawn on a canvas.
 *
 * The cursor behaves like a village gateway — nodes inside its reach wake up,
 * lean gently towards it and draw a link back to it. Clicking sends a ripple
 * through the field.
 *
 * Costs nothing when it cannot be used: with `prefers-reduced-motion` or on a
 * touch-only device a single static frame is drawn and the loop never starts.
 * The loop also stops whenever the tab is hidden.
 */
export default function BackgroundTexture() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");

    let theme = readTheme(host);
    let nodes: Node[] = [];
    let ripples: Ripple[] = [];
    let pulses: Pulse[] = [];
    let lastPulse = 0;
    let w = 0;
    let h = 0;
    let frame = 0;

    // Cursor: the real target, and the eased position the mesh actually reacts to.
    let targetX = -9999;
    let targetY = -9999;
    let curX = -9999;
    let curY = -9999;
    let awake = false;

    const animated = () => fine.matches && !reduced.matches;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      theme = readTheme(host);
      const count = Math.round(Math.min(Math.max((w * h) / theme.density, 36), 110));
      pulses = [];
      nodes = Array.from({ length: count }, () => {
        const x = Math.random() * w;
        const y = Math.random() * h;
        return {
          x, y, rx: x, ry: y,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          r: 1.5 + Math.random() * 1.7,
          wake: 0,
        };
      });
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);
      const { reach, linkDist, pull } = theme;
      const pointerLive = awake && curX > -9000;

      // Every so often a node transmits, so the field is alive even at rest.
      if (nodes.length && now - lastPulse > theme.pulseMs) {
        lastPulse = now;
        pulses.push({ node: Math.floor(Math.random() * nodes.length), born: now });
        if (pulses.length > 3) pulses.shift();
      }

      /* 1 — advance each node and work out where it renders */
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        // Wrap around the edges with a small margin so nodes never pop in view.
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;

        let wake = 0;
        n.rx = n.x;
        n.ry = n.y;

        if (pointerLive) {
          const dx = curX - n.x;
          const dy = curY - n.y;
          const d = Math.hypot(dx, dy);
          if (d < reach && d > 0.01) {
            // Linear falloff: a quadratic one lit only the two or three nodes
            // nearest the cursor, which read as noise rather than a network.
            wake = 1 - d / reach;
            n.rx = n.x + (dx / d) * pull * wake;
            n.ry = n.y + (dy / d) * pull * wake;
          }
        }
        // Ease towards the new wake value so nodes fade up and down smoothly.
        n.wake += (wake - n.wake) * 0.14;
      }

      /* 2 — the glow under the cursor */
      if (pointerLive) {
        const g = ctx.createRadialGradient(curX, curY, 0, curX, curY, reach * 1.7);
        g.addColorStop(0, `rgba(${theme.glowRgb}, ${String(theme.glowAlpha)})`);
        g.addColorStop(1, `rgba(${theme.glowRgb}, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(curX - reach * 1.7, curY - reach * 1.7, reach * 3.4, reach * 3.4);
      }

      /* 3 — links between neighbouring nodes */
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.rx - b.rx;
          const dy = a.ry - b.ry;
          if (Math.abs(dx) > linkDist || Math.abs(dy) > linkDist) continue;
          const d = Math.hypot(dx, dy);
          if (d > linkDist) continue;

          const closeness = 1 - d / linkDist;
          const lit = Math.max(a.wake, b.wake);
          const alpha = theme.linkAlpha * closeness + theme.linkAlpha * 2.6 * closeness * lit;
          ctx.strokeStyle = `rgba(${lit > 0.05 ? theme.activeRgb : theme.linkRgb}, ${String(alpha)})`;
          ctx.beginPath();
          ctx.moveTo(a.rx, a.ry);
          ctx.lineTo(b.rx, b.ry);
          ctx.stroke();
        }
      }

      /* 4 — links from the cursor back to the nodes it has woken */
      if (pointerLive) {
        for (const n of nodes) {
          if (n.wake < 0.03) continue;
          ctx.strokeStyle = `rgba(${theme.activeRgb}, ${String(0.55 * n.wake)})`;
          ctx.lineWidth = 0.6 + n.wake;
          ctx.beginPath();
          ctx.moveTo(curX, curY);
          ctx.lineTo(n.rx, n.ry);
          ctx.stroke();
        }
        ctx.lineWidth = 1;
      }

      /* 5 — the nodes themselves */
      for (const n of nodes) {
        const alpha = theme.nodeAlpha + (theme.activeAlpha - theme.nodeAlpha) * n.wake;
        const radius = n.r * (1 + 0.85 * n.wake);
        ctx.fillStyle = `rgba(${n.wake > 0.05 ? theme.activeRgb : theme.nodeRgb}, ${String(alpha)})`;
        ctx.beginPath();
        ctx.arc(n.rx, n.ry, radius, 0, Math.PI * 2);
        ctx.fill();

        // A soft halo on the most awake nodes, so they read as "reporting".
        if (n.wake > 0.16) {
          ctx.strokeStyle = `rgba(${theme.activeRgb}, ${String(0.28 * n.wake)})`;
          ctx.beginPath();
          ctx.arc(n.rx, n.ry, radius + 4 + 4 * n.wake, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      /* 6 — the cursor's own marker */
      if (pointerLive) {
        ctx.fillStyle = `rgba(${theme.activeRgb}, 0.55)`;
        ctx.beginPath();
        ctx.arc(curX, curY, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(${theme.activeRgb}, 0.22)`;
        ctx.beginPath();
        ctx.arc(curX, curY, 13, 0, Math.PI * 2);
        ctx.stroke();
      }

      /* 7 — node transmissions */
      if (pulses.length) {
        pulses = pulses.filter((p) => now - p.born < PULSE_MS);
        for (const p of pulses) {
          const n = nodes[p.node];
          if (!n) continue;
          const t = clamp01((now - p.born) / PULSE_MS);
          const eased = 1 - (1 - t) * (1 - t) * (1 - t);
          ctx.strokeStyle = `rgba(${theme.activeRgb}, ${String(0.4 * (1 - t))})`;
          ctx.lineWidth = 1.4 * (1 - t);
          ctx.beginPath();
          ctx.arc(n.rx, n.ry, 4 + eased * 34, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.lineWidth = 1;
      }

      /* 8 — click ripples */
      if (ripples.length) {
        ripples = ripples.filter((r) => now - r.born < RIPPLE_MS);
        for (const r of ripples) {
          const t = clamp01((now - r.born) / RIPPLE_MS);
          const eased = 1 - (1 - t) * (1 - t);
          ctx.strokeStyle = `rgba(${theme.activeRgb}, ${String(0.35 * (1 - t))})`;
          ctx.lineWidth = 2 * (1 - t);
          ctx.beginPath();
          ctx.arc(r.x, r.y, eased * reach * 1.25, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.lineWidth = 1;
      }
    };

    const tick = (now: number) => {
      curX += (targetX - curX) * 0.14;
      curY += (targetY - curY) * 0.14;
      draw(now);
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!frame && animated()) frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!awake) {
        awake = true;
        curX = targetX;
        curY = targetY;
      }
    };
    const onPointerLeave = () => { awake = false; };
    const onPointerDown = (event: PointerEvent) => {
      if (!animated()) return;
      ripples.push({ x: event.clientX, y: event.clientY, born: performance.now() });
      if (ripples.length > 4) ripples.shift();
    };

    /* The photograph fades back as the page scrolls, so it reads as a banner
       at the top without sitting under body copy further down. */
    const scrimTop = Number.parseFloat(
      getComputedStyle(host).getPropertyValue("--bg-photo-scrim-top"),
    );
    const scrimBody = Number.parseFloat(
      getComputedStyle(host).getPropertyValue("--bg-photo-scrim-body"),
    );
    let scrimFrame = 0;

    const applyScrim = () => {
      scrimFrame = 0;
      if (!Number.isFinite(scrimTop) || !Number.isFinite(scrimBody)) return;
      // Ease across the first viewport height of scrolling.
      const t = clamp01(window.scrollY / Math.max(window.innerHeight * 0.85, 1));
      const eased = t * t * (3 - 2 * t);
      host.style.setProperty("--bg-photo-scrim", String(scrimTop + (scrimBody - scrimTop) * eased));
    };
    const onScroll = () => {
      if (!scrimFrame) scrimFrame = requestAnimationFrame(applyScrim);
    };

    const onResize = () => {
      applyScrim();
      build();
      if (!animated()) draw(performance.now());
    };
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    const onPreferenceChange = () => {
      stop();
      if (animated()) start();
      else { awake = false; draw(performance.now()); }
    };

    build();
    applyScrim();
    if (animated()) {
      start();
    } else {
      // One static frame: the mesh still reads as a field, at no running cost.
      draw(performance.now());
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    reduced.addEventListener("change", onPreferenceChange);
    fine.addEventListener("change", onPreferenceChange);

    return () => {
      stop();
      if (scrimFrame) cancelAnimationFrame(scrimFrame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", onPreferenceChange);
      fine.removeEventListener("change", onPreferenceChange);
    };
  }, []);

  return (
    <div className="bg-texture" ref={hostRef} aria-hidden>
      <div className="bg-texture__photo" />
      <div className="bg-texture__scrim" />
      <div className="bg-texture__grid" />
      <canvas className="bg-texture__mesh" ref={canvasRef} />
    </div>
  );
}
