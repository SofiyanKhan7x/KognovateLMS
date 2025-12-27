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

  // ---------- 🔹 Convert topic slug -> readable title ----------
  const getTopicTitle = () =>
    topic
      ?.split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ") || "Topic";

  // ---------- 🔹 TOPIC SLUG ----------
  const topicSlug = topic || "";

  // ---------- 🔹 DIFFERENT VIDEOS PER TOPIC ----------
  const videosMap: Record<
    string,
    { title: string; duration: string; url: string }[]
  > = {
    // 🟢 Geometry videos
    geometry: [
      {
        title: "Introduction to Geometry",
        duration: "10:12",
        url: "https://www.youtube.com/embed/DGKwdHMiqCg",
      },
      {
        title: "Types of Angles",
        duration: "08:02",
        url: "https://www.youtube.com/embed/gR8M8pP6aA8",
      },
      {
        title: "Triangles Basics",
        duration: "12:30",
        url: "https://www.youtube.com/embed/G6o0lQdqVv8",
      },
      {
        title: "Circles Explained",
        duration: "09:44",
        url: "https://www.youtube.com/embed/1J7r8dNn4Ko",
      },
    ],

    // 🟡 Algebra example
    "algebra-basics": [
      {
        title: "What is Algebra?",
        duration: "09:45",
        url: "https://www.youtube.com/embed/QVKj3LADCnA",
      },
      {
        title: "Variables & Expressions",
        duration: "11:05",
        url: "https://www.youtube.com/embed/zoOcFZcP8G8",
      },
    ],

    // 🔴 fallback videos (default)
    default: [
      {
        title: "Introduction to the Topic",
        duration: "08:45",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        title: "Core Concepts Explained",
        duration: "12:30",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  };

  // ---------- 🔹 CHOOSE VIDEOS FOR CURRENT TOPIC ----------
  const currentVideos = videosMap[topicSlug] || videosMap["default"];

  const handleVideoClick = (title: string) => {
    toast.success(`Playing: ${title}`);
  };

  return (
    <div className="min-h-screen">
      <Navigation isLoggedIn />

      <main className="mx-auto px-4 pt-32 pb-20 max-w-full lg:max-w-6xl">
        <Button
          variant="ghost"
          onClick={() => navigate(`/topics/${ageGroup}/${subject}`)}
          className="mb-6 hover:-translate-x-1 transition"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Topics
        </Button>

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

          {/* ------------------ 🎥 VIDEOS TAB ------------------ */}
          <TabsContent value="videos" className="space-y-6">
            {/* Featured video */}
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`${currentVideos[0].url}?autoplay=0`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </Card>

            {/* Other video cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentVideos.slice(1).map((video, index) => (
                <VideoCard
                  key={index}
                  title={video.title}
                  duration={video.duration}
                  onClick={() => handleVideoClick(video.title)}
                />
              ))}
            </div>
          </TabsContent>

          {/* ------------------ 📄 PDF TAB ------------------ */}
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

          {/* ------------------ 📘 SUMMARY TAB ------------------ */}
          <TabsContent value="summary">
            <Card className="p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold">Topic Summary</h2>
              <p className="text-muted-foreground">
                This topic introduces core concepts of {getTopicTitle()} and
                builds strong fundamentals for advanced learning.
              </p>
            </Card>
          </TabsContent>

          {/* ------------------ 🧪 SIMULATION TAB ------------------ */}
          <TabsContent value="simulation">
            <Card className="p-6 sm:p-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                <PlayCircle className="w-6 h-6 text-primary" />
                Diffusion Simulation
              </h2>

              <p className="text-muted-foreground">
                This simulation demonstrates how particles move from higher
                concentration to lower concentration.
              </p>

              <div className="mx-auto w-full lg:w-3/4 xl:w-2/3">
                <div className="aspect-video rounded-xl overflow-hidden border">
                  <video
                    className="w-full h-full object-cover"
                    src="/simulation.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>

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
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
