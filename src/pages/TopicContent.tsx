import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  Video,
  FileText,
  BookOpen,
  Download,
  PlayCircle,
} from "lucide-react";
import { toast } from "sonner";

export default function TopicContent() {
  const { ageGroup, subject, topic } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("videos");

  const videos = [
    { title: "Introduction to the Topic", duration: "8:45" },
    { title: "Core Concepts Explained", duration: "12:30" },
    { title: "Practice Problems Walkthrough", duration: "15:20" },
    { title: "Advanced Techniques", duration: "10:15" },
    { title: "Real-world Applications", duration: "14:00" },
    { title: "Common Mistakes to Avoid", duration: "9:30" },
  ];

  const handleVideoClick = (title: string) => {
    toast.success(`Playing: ${title}`);
  };

  const getTopicTitle = () =>
    topic
      ?.split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ") || "Topic";

  return (
    <div className="min-h-screen">
      <Navigation isLoggedIn />

      {/* 🔹 Centered + responsive layout */}
      <main className="mx-auto px-4 pt-32 pb-20 max-w-full lg:max-w-6xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(`/topics/${ageGroup}/${subject}`)}
          className="mb-6 hover:-translate-x-1 transition"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Topics
        </Button>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-primary">
          {getTopicTitle()}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10">
          Learn through videos, PDFs, summaries, and simulations
        </p>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          {/* Tabs */}
          <TabsList className="flex flex-wrap gap-2 glass-card p-1 shadow-soft">
            <TabsTrigger value="videos" className="flex gap-2">
              <Video className="w-4 h-4" /> Videos
            </TabsTrigger>
            <TabsTrigger value="pdfs" className="flex gap-2">
              <FileText className="w-4 h-4" /> PDFs
            </TabsTrigger>
            <TabsTrigger value="summary" className="flex gap-2">
              <BookOpen className="w-4 h-4" /> Summary
            </TabsTrigger>
            <TabsTrigger value="simulation" className="flex gap-2">
              <PlayCircle className="w-4 h-4" /> Simulation
            </TabsTrigger>
          </TabsList>

          {/* 🎥 VIDEOS */}
          <TabsContent value="videos" className="space-y-6">
            {/* Featured video */}
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </Card>

            {/* Video cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.slice(1).map((video, index) => (
                <VideoCard
                  key={index}
                  {...video}
                  onClick={() => handleVideoClick(video.title)}
                />
              ))}
            </div>
          </TabsContent>

          {/* 📄 PDFS */}
          <TabsContent value="pdfs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((n) => (
                <Card
                  key={n}
                  className="p-6 flex flex-col sm:flex-row justify-between gap-4"
                >
                  <div>
                    <h3 className="text-xl font-bold">Study Material {n}</h3>
                    <p className="text-muted-foreground mb-4">
                      Notes for {getTopicTitle()}
                    </p>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                  <FileText className="w-10 h-10 text-primary self-start sm:self-center" />
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 📘 SUMMARY */}
          <TabsContent value="summary">
            <Card className="p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold">Topic Summary</h2>
              <p className="text-muted-foreground">
                This topic introduces core concepts of {getTopicTitle()} and
                builds strong fundamentals for advanced learning.
              </p>
            </Card>
          </TabsContent>

          {/* 🧪 SIMULATION */}
          <TabsContent value="simulation">
            <Card className="p-6 sm:p-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                <PlayCircle className="w-6 h-6 text-primary" />
                Diffusion Simulation
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base">
                This simulation demonstrates how particles move from higher
                concentration to lower concentration due to random molecular
                motion.
              </p>

              {/* 🔹 Smaller on desktop, full on mobile */}
              <div className="mx-auto w-full lg:w-3/4 xl:w-2/3">
                <div className="aspect-video rounded-xl overflow-hidden border">
                  <video
                    className="w-full h-full object-cover"
                    src="/simulation.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_all.html",
                      "_blank"
                    )
                  }
                >
                  View Live Simulation
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
