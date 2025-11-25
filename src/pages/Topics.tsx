import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { TopicCard } from "@/components/TopicCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function Topics() {
  const { ageGroup, subject } = useParams();
  const navigate = useNavigate();

  // Sample topics data - in real app, this would be fetched based on subject
  const getTopics = () => {
    const topicsMap: Record<string, any[]> = {
      mathematics: [
        { title: "Algebra Basics", description: "Introduction to variables and equations", videoCount: 8 },
        { title: "Geometry", description: "Shapes, angles, and spatial reasoning", videoCount: 12 },
        { title: "Trigonometry", description: "Understanding triangles and their properties", videoCount: 10 },
        { title: "Numbers & Operations", description: "Working with different number systems", videoCount: 6 },
        { title: "Fractions & Decimals", description: "Understanding parts of whole numbers", videoCount: 9 },
        { title: "Measurements", description: "Units, conversions, and practical applications", videoCount: 7 },
      ],
      science: [
        { title: "Physics Fundamentals", description: "Motion, force, and energy", videoCount: 15 },
        { title: "Chemistry Basics", description: "Atoms, molecules, and reactions", videoCount: 12 },
        { title: "Biology Essentials", description: "Living organisms and life processes", videoCount: 18 },
        { title: "Environmental Science", description: "Ecosystems and conservation", videoCount: 10 },
      ],
      english: [
        { title: "Grammar Fundamentals", description: "Parts of speech and sentence structure", videoCount: 10 },
        { title: "Reading Comprehension", description: "Understanding and analyzing texts", videoCount: 8 },
        { title: "Creative Writing", description: "Stories, essays, and creative expression", videoCount: 12 },
        { title: "Vocabulary Building", description: "Expanding your word knowledge", videoCount: 15 },
      ],
    };

    return topicsMap[subject || "mathematics"] || topicsMap.mathematics;
  };

  const topics = getTopics();

  const getSubjectTitle = () => {
    return subject?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") || "Subject";
  };

  return (
    <div className="min-h-screen">
      <Navigation isLoggedIn />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(`/subjects/${ageGroup}`)}
            className="mb-4 transition-smooth hover:translate-x-[-4px]"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Subjects
          </Button>
        </div>

        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            {getSubjectTitle()} Topics
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select a topic to start learning with videos, PDFs, and summaries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {topics.map((topic, index) => (
            <TopicCard
              key={topic.title}
              {...topic}
              to={`/content/${ageGroup}/${subject}/${topic.title.toLowerCase().replace(/\s+/g, "-")}`}
              delay={index * 50}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
