import { Flame } from "lucide-react";

export function SpiceLevel({ level }: { level: 0 | 1 | 2 | 3 }) {
  if (level === 0) return <span className="text-xs text-muted-foreground">Mild</span>;
  return (
    <div className="flex items-center gap-0.5" aria-label={`Spice level ${level} of 3`}>
      {Array.from({ length: 3 }).map((_, i) => (
        <Flame
          key={i}
          className={`size-3.5 ${i < level ? "text-ember fill-ember/40" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}
