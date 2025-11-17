import { cn } from "@/lib/utils";

interface FeatureCardProps {
  status: "planned" | "in-progress" | "concept";
  title: string;
  description: string;
}

export const FeatureCard = ({ status, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300">
      <div className="mb-3">
        <span
          className={cn(
            "inline-block text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider",
            status === "in-progress" && "bg-warning/20 text-warning",
            status === "planned" && "bg-muted text-muted-foreground",
            status === "concept" && "bg-primary/20 text-primary"
          )}
        >
          {status === "in-progress" ? "In Progress" : status}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
