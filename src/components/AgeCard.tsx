import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AgeCardProps {
  title: string;
  ageRange: string;
  icon: LucideIcon;
  gradient: string;
  to: string;
  delay?: number;
}

export const AgeCard = ({ title, ageRange, icon: Icon, gradient, to, delay = 0 }: AgeCardProps) => {
  return (
    <Link to={to}>
      <Card
        className="group relative overflow-hidden glass-card shadow-soft hover:shadow-elevated transition-smooth hover:scale-105 cursor-pointer animate-slide-up"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className={`absolute inset-0 ${gradient} opacity-10 group-hover:opacity-20 transition-smooth`} />
        
        <div className="relative p-8 flex flex-col items-center text-center space-y-4">
          <div className={`w-20 h-20 rounded-2xl ${gradient} flex items-center justify-center shadow-glow transition-smooth group-hover:scale-110`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground text-lg">{ageRange}</p>
          </div>

          <div className="text-sm font-semibold text-primary group-hover:translate-x-2 transition-smooth">
            Explore Subjects →
          </div>
        </div>
      </Card>
    </Link>
  );
};
