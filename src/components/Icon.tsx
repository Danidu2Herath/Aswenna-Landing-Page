import {
  MapPin, Droplets, Droplet, Thermometer, Zap, FlaskConical, Map, Satellite, CloudRain, Bug,
  Radar, RadioTower, Layers, BrainCircuit, Sprout, Wheat, CalendarRange, Waves, ScanSearch,
  TrendingUp, PackageCheck, Cpu, TestTube, CloudSun, Gauge, SunMedium,
  Languages, WifiOff, MessageSquare, ShieldCheck, Leaf, LayoutGrid, Users, Database,
  MessageCircle, SignalLow, PhoneCall, Plug, Star, Quote, Mail, Ruler, Send, Plus, Minus,
  type LucideIcon,
} from "lucide-react";

/** Every icon the content file is allowed to name, keyed by its string name. */
const registry: Record<string, LucideIcon> = {
  MapPin, Droplets, Droplet, Thermometer, Zap, FlaskConical, Map, Satellite, CloudRain, Bug,
  Radar, RadioTower, Layers, BrainCircuit, Sprout, Wheat, CalendarRange, Waves, ScanSearch,
  TrendingUp, PackageCheck, Cpu, TestTube, CloudSun, Gauge, SunMedium,
  Languages, WifiOff, MessageSquare, ShieldCheck, Leaf, LayoutGrid, Users, Database,
  MessageCircle, SignalLow, PhoneCall, Plug, Star, Quote, Mail, Ruler, Send, Plus, Minus,
};

export default function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const Cmp = registry[name] ?? Sprout;
  return <Cmp size={size} strokeWidth={1.8} aria-hidden />;
}
