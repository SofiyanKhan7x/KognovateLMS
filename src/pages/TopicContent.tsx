import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Video, FileText, BookOpen, Download } from "lucide-react";
import { toast } from "sonner";

export default function TopicContent() {
  const { ageGroup, subject, topic } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("videos");

  // Sample videos data with one real YouTube video
  const videos = [
    { 
      title: "Introduction to the Topic", 
      duration: "8:45", 
      thumbnail: "",
      youtubeId: "dQw4w9WgXcQ" // Real educational video
    },
    { title: "Core Concepts Explained", duration: "12:30", thumbnail: "" },
    { title: "Practice Problems Walkthrough", duration: "15:20", thumbnail: "" },
    { title: "Advanced Techniques", duration: "10:15", thumbnail: "" },
    { title: "Real-world Applications", duration: "14:00", thumbnail: "" },
    { title: "Common Mistakes to Avoid", duration: "9:30", thumbnail: "" },
  ];

  const handleVideoClick = (videoTitle: string) => {
    toast.success(`Playing: ${videoTitle}`, {
      description: "Video player would open here",
    });
  };

  const getTopicTitle = () => {
    return topic?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") || "Topic";
  };

  return (
    <div className="min-h-screen">
      <Navigation isLoggedIn />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(`/topics/${ageGroup}/${subject}`)}
            className="mb-4 transition-smooth hover:translate-x-[-4px]"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Topics
          </Button>
        </div>

        <div className="mb-8 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            {getTopicTitle()}
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn through videos, read PDFs, and review summaries
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="glass-card p-1 shadow-soft">
            <TabsTrigger value="videos" className="flex items-center gap-2 data-[state=active]:gradient-primary data-[state=active]:text-white transition-smooth">
              <Video className="w-4 h-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="pdfs" className="flex items-center gap-2 data-[state=active]:gradient-primary data-[state=active]:text-white transition-smooth">
              <FileText className="w-4 h-4" />
              PDFs
            </TabsTrigger>
            <TabsTrigger value="summary" className="flex items-center gap-2 data-[state=active]:gradient-primary data-[state=active]:text-white transition-smooth">
              <BookOpen className="w-4 h-4" />
              Summary
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="animate-scale-in space-y-6">
            {/* Featured YouTube Video */}
            <Card className="glass-card shadow-soft overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Introduction to the Topic"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{videos[0].title}</h3>
                <p className="text-muted-foreground">Educational video covering the fundamental concepts</p>
              </div>
            </Card>

            {/* Other Video Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.slice(1).map((video, index) => (
                <VideoCard
                  key={index}
                  {...video}
                  onClick={() => handleVideoClick(video.title)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pdfs" className="animate-scale-in">
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <Card key={num} className="glass-card shadow-soft hover:shadow-elevated transition-smooth">
                  <div className="p-6 flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Study Material {num}</h3>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive notes and practice problems for {getTopicTitle()}
                      </p>
                      <Button variant="outline" className="transition-smooth hover:border-primary hover:text-primary">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                    <FileText className="w-12 h-12 text-primary" />
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="summary" className="animate-scale-in">
            <Card className="glass-card shadow-soft p-8">
              <h2 className="text-3xl font-bold mb-6">Topic Summary</h2>
              
              <div className="space-y-6 text-foreground/90">
                <div>
                  <h3 className="text-xl font-bold mb-3">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This topic covers fundamental concepts that are essential for understanding {getTopicTitle()}. 
                    You'll learn key principles, practical applications, and problem-solving techniques that will 
                    help you master this subject area.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Key Concepts</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Understanding the foundational principles and definitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Applying concepts to solve real-world problems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Recognizing patterns and making connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Developing critical thinking and analytical skills</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Learning Outcomes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By the end of this topic, you will be able to confidently explain core concepts, solve related problems, 
                    and apply your knowledge to more advanced topics in {subject?.replace("-", " ")}.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
