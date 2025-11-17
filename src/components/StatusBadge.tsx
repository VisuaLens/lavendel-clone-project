import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "planned" | "in-progress" | "concept";
  children: React.ReactNode;
}

export const StatusBadge = ({ status, children }: StatusBadgeProps) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition-colors">
      <span className="text-foreground font-medium">{children}</span>
      <span
        className={cn(
          "text-xs px-2 py-0.5 rounded-full",
          status === "in-progress" && "bg-warning/20 text-warning",
          status === "planned" && "bg-muted-foreground/20 text-muted-foreground",
          status === "concept" && "bg-primary/20 text-primary"
        )}
      >
        {status === "in-progress" ? "in-progress" : status}
      </span>
    </div>
  );
};
