import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Trophy, Clock } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

export default function Home() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Clock,
      title: "Learn Anytime",
      description: "Access courses 24/7 at your own pace",
    },
    {
      icon: Users,
      title: "Expert Teachers",
      description: "Learn from certified and experienced educators",
    },
    {
      icon: BookOpen,
      title: "Structured Learning",
      description: "Age-appropriate curriculum designed for success",
    },
    {
      icon: Trophy,
      title: "Track Progress",
      description: "Monitor your growth with detailed analytics",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-lg">🎓</span>
                <span className="text-sm  font-semibold  ">
                  World's Best Learning Platform
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                World's Best Learning Platform{" "}
                <span className="text-primary">for Every Age</span>
              </h1>

              <p className="text-xl text-muted-foreground">
                Unlock your potential with personalized learning experiences
                designed for students of all ages. From foundational skills to
                advanced concepts, we've got you covered.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/dashboard")}
                  className="gradient-primary text-white shadow-glow transition-smooth hover:scale-105 text-lg px-8 py-6"
                >
                  Start Learning
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/dashboard")}
                  className="transition-smooth hover:border-primary hover:text-primary text-lg px-8 py-6"
                >
                  Explore Courses
                </Button>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 gradient-hero opacity-20 blur-3xl rounded-full" />
              <img
                src={heroImage}
                alt="Students learning"
                className="relative rounded-3xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Why Choose LMS?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of education with our comprehensive learning
              platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card p-8 shadow-soft hover:shadow-elevated transition-smooth hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-glow">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-card gradient-hero p-12 rounded-3xl shadow-elevated text-center text-white animate-scale-in">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students already learning with LMS
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/dashboard")}
              className="bg-white text-primary hover:bg-white/90 shadow-elevated transition-smooth hover:scale-105 text-lg px-8 py-6"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 LMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
