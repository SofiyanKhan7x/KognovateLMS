import { Navigation } from "@/components/Navigation";
import { AgeCard } from "@/components/AgeCard";
import { Baby, Users, GraduationCap } from "lucide-react";

export default function Dashboard() {
  const ageCategories = [
    {
      title: "Middle School",
      ageRange: "10-15 Years",
      icon: Users,
      gradient: "gradient-primary",
      to: "/subjects/10-15",
    },
    {
      title: "High School",
      ageRange: "15-18 Years",
      icon: GraduationCap,
      gradient: "bg-gradient-to-br from-accent to-destructive",
      to: "/subjects/15-20",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation isLoggedIn />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4">
            Choose Your <span className="text-primary">Learning Path</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your age category to explore subjects tailored to your
            learning level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ageCategories.map((category, index) => (
            <AgeCard key={category.title} {...category} delay={index * 100} />
          ))}
        </div>
      </main>
    </div>
  );
}
