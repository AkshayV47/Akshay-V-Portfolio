import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { ExternalLink, Github, Linkedin, Play, ChevronLeft, ChevronRight } from "lucide-react";
import satelliteImg from "@/assets/satellite-project.jpg";
import endoscopicImg from "@/assets/endoscopic-project.jpg";
import pocketAgliImg from "@/assets/pocket-agli-project.jpg";
import airGestureImg from "@/assets/air-gesture-project.jpg";

const endoscopicVideos = [
  "https://github.com/AkshayV47/Smart-Endoscopic-Pipe-Moniter/raw/main/Video.mp4",
  "https://github.com/AkshayV47/Smart-Endoscopic-Pipe-Moniter/raw/main/WhatsApp%20Video%202025-10-02%20at%201.45.26%20PM.mp4",
  "https://github.com/AkshayV47/Smart-Endoscopic-Pipe-Moniter/raw/main/WhatsApp%20Video%202025-10-02%20at%201.45.27%20PM.mp4",
];

const airGestureVideos = ["/videos/smart-home-gesture.mp4"];

interface Project {
  title: string;
  subtitle: string;
  description: string;
  expandedDescription?: string;
  tags: string[];
  image: string | null;
  highlight?: boolean;
  expandable?: boolean;
  videos?: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  recordLinks?: { label: string; url: string }[];
}

const projects: Project[] = [
  {
    title: "Ramachandran A-1",
    subtitle: "World Record Satellite",
    description: "The world's smallest and lightest wooden femto-category satellite — a 3.5 cm³ teak wood cube weighing ~27 grams.",
    tags: ["Space Tech", "Hardware", "Innovation"],
    image: satelliteImg,
    highlight: true,
    recordLinks: [
      { label: "Kalam's World Records", url: "https://www.kalamsworldrecords.com/worlds-smallest-lightest-first-wooden-femto-category-satellite/" },
      { label: "International Book of Records", url: "https://www.internationalbookofrecords.com/records/smallest-and-lightest-wooden-femto-category-satellite/" },
    ],
  },
  {
    title: "Pocket AGLI",
    subtitle: "Wearable AI System",
    description: "A wearable AI system integrating ESP32-CAM, voice recognition, and computer vision for real-time assistance.",
    expandedDescription: "Pocket AGLI (Artificial General-Level Intelligence) is an ambitious wearable AI companion built around the ESP32-CAM microcontroller. It combines real-time computer vision, natural language voice recognition, and edge AI inference into a pocket-sized device. The system can identify objects, read text aloud, answer questions via an onboard LLM API, and provide contextual assistance — all while being lightweight enough to clip onto clothing. It represents a step toward making AI truly portable and personal.",
    tags: ["ESP32-CAM", "AI", "Wearable", "IoT"],
    image: pocketAgliImg,
    expandable: true,
    linkedinUrl: "https://www.linkedin.com/pulse/pocket-agli-ai-story-intelligence-akshay-v-ensac",
  },
  {
    title: "Smart Endoscopic Pipe Monitor",
    subtitle: "IoT Robotic Inspection",
    description: "An IoT-powered robotic arm using ESP32-CAM and OpenCV to inspect and repair pipe defects in real time.",
    expandedDescription: "This project features a custom-built robotic inspection system that navigates through industrial pipes using a motorized crawler equipped with an ESP32-CAM. The live video feed is processed with OpenCV for crack detection and corrosion analysis. A robotic arm attachment enables minor in-pipe repairs. The entire system is controlled wirelessly via a web dashboard, making it ideal for predictive maintenance in factories and municipal infrastructure.",
    tags: ["OpenCV", "ESP32", "Robotics"],
    image: endoscopicImg,
    expandable: true,
    videos: endoscopicVideos,
    githubUrl: "https://github.com/AkshayV47/Smart-Endoscopic-Pipe-Moniter",
    linkedinUrl: "https://www.linkedin.com/posts/akshay-v-3b589b28a_innovation-iotabrproject-embeddedabrproject-activity-7417605745900400640-n8MY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZBJXkBw-rBOloJ_VzdKgwBeuFGdc9b-Qc",
  },
  {
    title: "Smart Air Gesture Home Automation",
    subtitle: "Gesture Control System",
    description: "A home automation system that controls appliances using air gestures for touchless interaction.",
    expandedDescription: "This smart home automation system uses computer vision and gesture recognition to enable touchless control of household appliances. By detecting specific hand gestures through a camera module, users can turn on/off lights, fans, and other devices without physical contact. The system integrates ESP32 with relay modules for wireless appliance control, making everyday interactions more hygienic and futuristic.",
    tags: ["IoT", "Gesture", "Embedded"],
    image: airGestureImg,
    expandable: true,
    videos: airGestureVideos,
    linkedinUrl: "https://www.linkedin.com/posts/akshay-v-3b589b28a_smartabrhome-innovation-iotabrproject-activity-7304354807312457729-OMF0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZBJXkBw-rBOloJ_VzdKgwBeuFGdc9b-Qc",
  },
  {
    title: "Geo-Transport Monitoring",
    subtitle: "Patent ID: 2021097501",
    description: "A GPS-based tag system for tracking exported goods and detecting losses during transportation.",
    tags: ["GPS", "IoT", "Patent"],
    image: null,
  },
];

const VideoPlayer = ({ videos }: { videos: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleEnded = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
  };

  return (
    <div
      className="relative rounded-xl overflow-hidden border border-border bg-background"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <video
        ref={videoRef}
        key={videos[currentIndex]}
        src={videos[currentIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        className="w-full aspect-[9/16] max-h-[500px] object-contain mx-auto bg-black"
      />
      {/* Navigation arrows */}
      {videos.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/70 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/70 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}
      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-primary w-5" : "bg-foreground/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (title: string, expandable?: boolean) => {
    if (!expandable) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setHoveredProject(title), 300);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setHoveredProject(null), 500);
  };

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-8">Projects 🚀</h2>

        <div className="grid gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card overflow-hidden transition-all duration-400 ${project.highlight ? "glow" : ""} ${project.expandable ? "cursor-pointer" : ""}`}
              onMouseEnter={() => handleMouseEnter(project.title, project.expandable)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col md:flex-row">
                {project.image && (
                  <div className="md:w-64 h-44 md:h-auto overflow-hidden shrink-0 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {project.expandable && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-10 h-10 text-white" />
                      </div>
                    )}
                  </div>
                )}
                <div className="p-5 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    {project.highlight && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono border border-primary/20">🏆 World Record</span>
                    )}
                    {project.expandable && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-mono">
                        {hoveredProject === project.title ? "Exploring..." : "↗ Hover to explore"}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-primary/80 font-mono mb-2">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expandable section on hover */}
              <AnimatePresence>
                {project.expandable && hoveredProject === project.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-border">
                      {/* Expanded description */}
                      {project.expandedDescription && (
                        <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-4">
                          {project.expandedDescription}
                        </p>
                      )}

                      {/* Videos */}
                      {project.videos && project.videos.length > 0 && (
                        <div className="mt-3">
                          <VideoPlayer videos={project.videos} />
                        </div>
                      )}

                      {/* Links */}
                      <div className="flex flex-wrap gap-3 mt-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                          >
                            <Github className="w-4 h-4" /> View on GitHub
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {project.linkedinUrl && (
                          <a
                            href={project.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                          >
                            <Linkedin className="w-4 h-4" /> View on LinkedIn
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
