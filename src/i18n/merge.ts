/** A translation may fill in any subset of the content tree. */
export type DeepPartial<T> = T extends readonly (infer U)[]
  ? readonly DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

/**
 * Lays a translation over the English content.
 *
 * Arrays are merged element by element against the English list, so a locale
 * can translate the first two cards of a six-card section and the rest stay in
 * English rather than disappearing. Anything the translation omits is taken
 * from the base.
 */
export function merge<T>(base: T, over: DeepPartial<T> | undefined): T {
  if (over === undefined) return base;

  if (Array.isArray(base)) {
    const o = over as unknown;
    if (!Array.isArray(o)) return base;
    return base.map((item, i) => merge(item, (o as unknown[])[i] as never)) as unknown as T;
  }

  if (isPlainObject(base)) {
    if (!isPlainObject(over)) return base;
    const out: Record<string, unknown> = { ...base };
    for (const key of Object.keys(base)) {
      if (key in over) {
        out[key] = merge((base as Record<string, unknown>)[key], over[key] as never);
      }
    }
    return out as T;
  }

  // A primitive: the translation wins when it supplied one.
  return (over as unknown as T) ?? base;
}
