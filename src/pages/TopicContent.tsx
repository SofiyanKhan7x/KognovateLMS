// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Navigation } from "@/components/Navigation";
// import { VideoCard } from "@/components/VideoCard";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card } from "@/components/ui/card";
// import {
//   ChevronLeft,
//   Video,
//   FileText,
//   BookOpen,
//   Download,
//   PlayCircle,
// } from "lucide-react";
// import { toast } from "sonner";

// export default function TopicContent() {
//   const { ageGroup, subject, topic } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("videos");

//   const getTopicTitle = () =>
//     topic
//       ?.split("-")
//       .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//       .join(" ") || "Topic";

//   const topicSlug = topic || "";

//   // ---------- 🔹 VIDEOS ----------
//   const videosMap: Record<
//     string,
//     { title: string; duration: string; url: string }[]
//   > = {
//     geometry: [
//       {
//         title: "Introduction to Geometry",
//         duration: "10:12",
//         url: "https://www.youtube.com/embed/DGKwdHMiqCg",
//       },
//       {
//         title: "Types of Angles",
//         duration: "08:02",
//         url: "https://www.youtube.com/embed/gR8M8pP6aA8",
//       },
//       {
//         title: "Triangles Basics",
//         duration: "12:30",
//         url: "https://www.youtube.com/embed/G6o0lQdqVv8",
//       },
//       {
//         title: "Circles Explained",
//         duration: "09:44",
//         url: "https://www.youtube.com/embed/1J7r8dNn4Ko",
//       },
//     ],

//     "algebra-basics": [
//       {
//         title: "What is Algebra?",
//         duration: "09:45",
//         url: "https://www.youtube.com/embed/NybHckSEQBI",
//       },
//       {
//         title: "Algebra As Pattern",
//         duration: "11:05",
//         url: "https://www.youtube.com/embed/zoOcFZcP8G8",
//       },
//       {
//         title: "Equations” and “Inequalities",
//         duration: "11:05",
//         url: "https://www.youtube.com/embed/zoOcFZcP8G8",
//       },
//       {
//         title: "Exponents”, “Functions”, and “Polynomials",
//         duration: "11:05",
//         url: "https://www.youtube.com/embed/zoOcFZcP8G8",
//       },
//     ],

//     default: [
//       {
//         title: "Introduction to the Topic",
//         duration: "08:45",
//         url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//       },
//       {
//         title: "Core Concepts Explained",
//         duration: "12:30",
//         url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//       },
//     ],
//   };

//   const currentVideos = videosMap[topicSlug] || videosMap["default"];

//   // ---------- 🔹 SIMULATIONS ----------
//   const simulationMap: Record<
//     string,
//     {
//       title: string;
//       description: string;
//       video: string;
//       external?: string;
//     }
//   > = {
//     // 🧮 algebra simulation
//     "algebra-basics": {
//       title: "Algerba As Pattern",
//       description:
//         "Use virtual tiles to build and solve algebraic expressions visually.",
//       video: "/pattern.mp4", // 👉 place your file in /public
//       external: "https://www.geogebra.org/m/hkpdxysv/preview",
//     },

//     // 🧪 default: KEEP YOUR OLD DIFFUSION SIMULATION
//     default: {
//       title: "Diffusion Simulation",
//       description:
//         "This simulation demonstrates how particles move from higher concentration to lower concentration.",
//       video: "/simulation.mp4",
//       external:
//         "https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_all.html",
//     },
//   };

//   const currentSimulation =
//     simulationMap[topicSlug] || simulationMap["default"];

//   const handleVideoClick = (title: string) => {
//     toast.success(`Playing: ${title}`);
//   };

//   return (
//     <div className="min-h-screen">
//       <Navigation isLoggedIn />

//       <main className="mx-auto px-4 pt-32 pb-20 max-w-full lg:max-w-6xl">
//         <Button
//           variant="ghost"
//           onClick={() => navigate(`/topics/${ageGroup}/${subject}`)}
//           className="mb-6 hover:-translate-x-1 transition"
//         >
//           <ChevronLeft className="w-4 h-4 mr-2" />
//           Back to Topics
//         </Button>

//         <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-primary">
//           {getTopicTitle()}
//         </h1>

//         <p className="text-lg sm:text-xl text-muted-foreground mb-10">
//           Learn through videos, PDFs, summaries, and simulations
//         </p>

//         <Tabs
//           value={activeTab}
//           onValueChange={setActiveTab}
//           className="space-y-8"
//         >
//           <TabsList className="flex flex-wrap gap-2 glass-card p-1 shadow-soft">
//             <TabsTrigger value="videos" className="flex gap-2">
//               <Video className="w-4 h-4" /> Videos
//             </TabsTrigger>
//             <TabsTrigger value="pdfs" className="flex gap-2">
//               <FileText className="w-4 h-4" /> PDFs
//             </TabsTrigger>
//             <TabsTrigger value="summary" className="flex gap-2">
//               <BookOpen className="w-4 h-4" /> Summary
//             </TabsTrigger>
//             <TabsTrigger value="simulation" className="flex gap-2">
//               <PlayCircle className="w-4 h-4" /> Simulation
//             </TabsTrigger>
//           </TabsList>

//           {/* ---------- Videos ---------- */}
//           <TabsContent value="videos" className="space-y-6">
//             <Card className="overflow-hidden">
//               <div className="aspect-video">
//                 <iframe
//                   className="w-full h-full"
//                   src={`${currentVideos[0].url}?autoplay=0`}
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                 />
//               </div>
//             </Card>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {currentVideos.slice(1).map((video, index) => (
//                 <VideoCard
//                   key={index}
//                   title={video.title}
//                   duration={video.duration}
//                   onClick={() => handleVideoClick(video.title)}
//                 />
//               ))}
//             </div>
//           </TabsContent>

//           {/* ---------- PDFs ---------- */}
//           <TabsContent value="pdfs">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {[1, 2, 3, 4].map((n) => (
//                 <Card
//                   key={n}
//                   className="p-6 flex flex-col sm:flex-row justify-between gap-4"
//                 >
//                   <div>
//                     <h3 className="text-xl font-bold">Study Material {n}</h3>
//                     <p className="text-muted-foreground mb-4">
//                       Notes for {getTopicTitle()}
//                     </p>
//                     <Button variant="outline">
//                       <Download className="w-4 h-4 mr-2" />
//                       Download PDF
//                     </Button>
//                   </div>
//                   <FileText className="w-10 h-10 text-primary self-start sm:self-center" />
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           {/* ---------- Summary ---------- */}
//           <TabsContent value="summary">
//             <Card className="p-6 sm:p-8 space-y-4">
//               <h2 className="text-2xl sm:text-3xl font-bold">Topic Summary</h2>
//               <p className="text-muted-foreground">
//                 This topic introduces core concepts of {getTopicTitle()} and
//                 builds strong fundamentals for advanced learning.
//               </p>
//             </Card>
//           </TabsContent>

//           {/* ---------- Simulation ---------- */}
//           <TabsContent value="simulation">
//             <Card className="p-6 sm:p-8 space-y-6">
//               <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
//                 <PlayCircle className="w-6 h-6 text-primary" />
//                 {currentSimulation.title}
//               </h2>

//               <p className="text-muted-foreground">
//                 {currentSimulation.description}
//               </p>

//               <div className="mx-auto w-full lg:w-3/4 xl:w-2/3">
//                 <div className="aspect-video rounded-xl overflow-hidden border">
//                   <video
//                     className="w-full h-full object-cover"
//                     src={currentSimulation.video}
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                   />
//                 </div>
//               </div>

//               {currentSimulation.external && (
//                 <Button
//                   variant="outline"
//                   onClick={() =>
//                     window.open(currentSimulation.external, "_blank")
//                   }
//                 >
//                   View Live Simulation
//                 </Button>
//               )}
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </main>
//     </div>
//   );
// }
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

  const getTopicTitle = () =>
    topic
      ?.split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ") || "Topic";

  const topicSlug = topic || "";

  // ---------- 🔹 VIDEOS ----------
  const videosMap: Record<
    string,
    { title: string; duration: string; url: string }[]
  > = {
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

    "algebra-basics": [
      {
        title: "What is Algebra?",
        duration: "09:45",
        url: "https://www.youtube.com/embed/NybHckSEQBI",
      },
      {
        title: "Algebra As Pattern",
        duration: "11:05",
        url: "https://www.youtube.com/embed/zoOcFZcP8G8",
      },
      {
        title: "Equations and Inequalities",
        duration: "10:30",
        url: "https://www.youtube.com/embed/8jNPelugC2s",
      },
      {
        title: "Exponents, Functions and Polynomials",
        duration: "12:10",
        url: "https://www.youtube.com/embed/Z56Jmr9Z34Q",
      },
    ],

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

  const currentVideos = videosMap[topicSlug] || videosMap["default"];

  // ---------- 🔹 MULTIPLE SIMULATIONS ----------
  const simulationMap: Record<
    string,
    {
      title: string;
      description: string;
      video: string;
      external?: string;
    }[]
  > = {
    // 🧮 algebra simulations (3 items)
    "algebra-basics": [
      {
        title: "Algebra as Pattern",
        description:
          "Recognize and extend visual and numeric patterns to build algebraic thinking.",
        video: "/pattern.mp4",
        external: "https://www.geogebra.org/m/hkpdxysv/preview",
      },
      {
        title: "Equations and Inequalities",
        description:
          "Use tiles to build expressions and see how equations balance visually.",
        video: "/equation.mp4",
        external: "https://mathlearningcenter.org/apps/algebra-tiles",
      },
      {
        title: "Exponents, Functions, and Polynomials",
        description:
          "Solve linear equations using a balance scale model that enforces equal operations on both sides.",
        video: "/exponent.mp4",
        external: "https://www.geogebra.org/m/qsqvy7pe",
      },
    ],

    // 🧪 default diffusion stays SAME
    default: [
      {
        title: "Diffusion Simulation",
        description:
          "This simulation demonstrates how particles move from higher concentration to lower concentration.",
        video: "/simulation.mp4",
        external:
          "https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_all.html",
      },
    ],
  };

  const currentSimulations =
    simulationMap[topicSlug] || simulationMap["default"];

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

          {/* ---------- Videos ---------- */}
          <TabsContent value="videos" className="space-y-6">
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

          {/* ---------- PDFs ---------- */}
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

          {/* ---------- Summary ---------- */}
          <TabsContent value="summary">
            <Card className="p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold">Topic Summary</h2>
              <p className="text-muted-foreground">
                This topic introduces core concepts of {getTopicTitle()} and
                builds strong fundamentals for advanced learning.
              </p>
            </Card>
          </TabsContent>

          {/* ---------- Simulation (multiple) ---------- */}
          <TabsContent value="simulation">
            <div className="space-y-8">
              {currentSimulations.map((sim, i) => (
                <Card key={i} className="p-6 sm:p-8 space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                    <PlayCircle className="w-6 h-6 text-primary" />
                    {sim.title}
                  </h2>

                  <p className="text-muted-foreground">{sim.description}</p>

                  <div className="mx-auto w-full lg:w-4/4 xl:w-2/3">
                    <div className="aspect-video rounded-xl overflow-hidden border">
                      <video
                        className="w-full h-full object-contain bg-black"
                        src={sim.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  </div>

                  {sim.external && (
                    <Button
                      variant="outline"
                      onClick={() =>
                        window.open(sim.external as string, "_blank")
                      }
                    >
                      View Live Simulation
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
