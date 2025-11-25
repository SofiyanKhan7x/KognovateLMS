import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SubjectCard } from "@/components/SubjectCard";
import { Button } from "@/components/ui/button";
import { Calculator, BookOpen, Beaker, Laptop, Globe, Palette, ChevronLeft } from "lucide-react";

export default function Subjects() {
  const { ageGroup } = useParams();
  const navigate = useNavigate();

  const subjects = [
    {
      title: "Mathematics",
      icon: Calculator,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      topicsCount: 12,
      to: `/topics/${ageGroup}/mathematics`,
    },
    {
      title: "English",
      icon: BookOpen,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      topicsCount: 10,
      to: `/topics/${ageGroup}/english`,
    },
    {
      title: "Science",
      icon: Beaker,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      topicsCount: 15,
      to: `/topics/${ageGroup}/science`,
    },
    {
      title: "Computer",
      icon: Laptop,
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      topicsCount: 8,
      to: `/topics/${ageGroup}/computer`,
    },
    {
      title: "General Knowledge",
      icon: Globe,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      topicsCount: 20,
      to: `/topics/${ageGroup}/general-knowledge`,
    },
    {
      title: "Arts & Creativity",
      icon: Palette,
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      topicsCount: 6,
      to: `/topics/${ageGroup}/arts`,
    },
  ];

  const getAgeGroupTitle = () => {
    switch (ageGroup) {
      case "5-7":
        return "Early Learners (5-7 Years)";
      case "10-15":
        return "Middle School (10-15 Years)";
      case "15-20":
        return "High School (15-20 Years)";
      default:
        return "Select a Subject";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation isLoggedIn />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="mb-4 transition-smooth hover:translate-x-[-4px]"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            {getAgeGroupTitle()}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose a subject to explore exciting topics and lessons
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={subject.title}
              {...subject}
              delay={index * 50}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
