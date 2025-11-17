import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  status: "planned" | "in-progress" | "concept";
  description: string;
}

export const TechBadge = ({ name, status, description }: TechBadgeProps) => {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card/50">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono font-semibold text-foreground">{name}</span>
          <span
            className={cn(
              "text-xs px-2 py-0.5 rounded",
              status === "in-progress" && "bg-warning/20 text-warning",
              status === "planned" && "bg-muted-foreground/20 text-muted-foreground",
              status === "concept" && "bg-primary/20 text-primary"
            )}
          >
            {status}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
