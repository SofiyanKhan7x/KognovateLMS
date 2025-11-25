import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SubjectCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  topicsCount: number;
  to: string;
  delay?: number;
}

export const SubjectCard = ({ title, icon: Icon, color, topicsCount, to, delay = 0 }: SubjectCardProps) => {
  return (
    <Link to={to}>
      <Card
        className="group glass-card shadow-soft hover:shadow-elevated transition-smooth hover:scale-105 cursor-pointer animate-scale-in"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="p-6 flex flex-col items-center text-center space-y-4">
          <div className={`w-16 h-16 rounded-xl ${color} flex items-center justify-center transition-smooth group-hover:scale-110 group-hover:rotate-6`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{topicsCount} Topics</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};
