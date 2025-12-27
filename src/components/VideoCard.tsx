import { Card } from "@/components/ui/card";
import { Play, Clock } from "lucide-react";

interface VideoCardProps {
  title: string;
  duration: string;
  onClick: () => void;
}

export const VideoCard = ({ title, duration, onClick }: VideoCardProps) => {
  return (
    <Card
      className="group glass-card shadow-soft hover:shadow-elevated transition-smooth hover:scale-105 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="relative aspect-video bg-muted">
        <div className="absolute inset-0 gradient-primary opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-elevated transition-smooth group-hover:scale-110 group-hover:bg-white">
            <Play className="w-8 h-8 text-primary ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-white text-xs">
          <Clock className="w-3 h-3" />
          {duration}
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold group-hover:text-primary transition-smooth">
          {title}
        </h4>
      </div>
    </Card>
  );
};
