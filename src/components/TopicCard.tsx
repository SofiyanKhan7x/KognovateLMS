import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { BookOpen, Video, FileText } from "lucide-react";

interface TopicCardProps {
  title: string;
  description: string;
  videoCount: number;
  to: string;
  delay?: number;
}

export const TopicCard = ({ title, description, videoCount, to, delay = 0 }: TopicCardProps) => {
  return (
    <Link to={to}>
      <Card
        className="group glass-card shadow-soft hover:shadow-elevated transition-smooth hover:scale-105 cursor-pointer animate-slide-up"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <BookOpen className="w-6 h-6 text-primary flex-shrink-0 ml-4" />
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 border-t border-border">
            <div className="flex items-center gap-1">
              <Video className="w-4 h-4" />
              <span>{videoCount} videos</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              <span>PDF & Summary</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
