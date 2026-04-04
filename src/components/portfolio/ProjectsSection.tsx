import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Linkedin, Play, X } from "lucide-react";
import satelliteImg from "@/assets/satellite-project.jpg";
import droneImg from "@/assets/drone-project.jpg";
import pocketAiImg from "@/assets/pocket-ai-project.jpg";
import virtualMouseImg from "@/assets/virtual-mouse-project.jpg";

const endoscopicVideos = [
  "https://github.com/AkshayV47/Smart-Endoscopic-Pipe-Moniter/raw/main/Video.mp4",
  "https://github.com/AkshayV47/Smart-Endoscopic-Pipe-Moniter/raw/main/WhatsApp%20Video%202025-10-02%20at%201.45.26%20PM.mp4",
  "https://github.com/AkshayV47/Smart-Endoscopic-Pipe-Moniter/raw/main/WhatsApp%20Video%202025-10-02%20at%201.45.27%20PM.mp4",
];

const projects = [
  {
    title: "Ramachandran A-1",
    subtitle: "World Record Satellite",
    description: "The world's smallest and lightest wooden femto-category satellite — a 3.5 cm³ teak wood cube weighing ~27 grams.",
    tags: ["Space Tech", "Hardware", "Innovation"],
    image: satelliteImg,
    highlight: true,
  },
  {
    title: "Pocket AGLI",
    subtitle: "Wearable AI System",
    description: "A wearable AI system integrating ESP32-CAM, voice recognition, and computer vision for real-time assistance.",
    tags: ["ESP32-CAM", "AI", "Wearable", "IoT"],
    image: pocketAiImg,
  },
  {
    title: "Smart Endoscopic Pipe Monitor",
    subtitle: "IoT Robotic Inspection",
    description: "An IoT-powered robotic arm using ESP32-CAM and OpenCV to inspect and repair pipe defects in real time.",
    tags: ["OpenCV", "ESP32", "Robotics"],
    image: droneImg,
    expandable: true,
    githubUrl: "https://github.com/AkshayV47/Smart-Endoscopic-Pipe-Moniter",
    linkedinUrl: "https://www.linkedin.com/posts/akshay-v-3b589b28a_innovation-iotabrproject-embeddedabrproject-activity-7417605745900400640-n8MY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZBJXkBw-rBOloJ_VzdKgwBeuFGdc9b-Qc",
  },
  {
    title: "Smart Air Gesture Home Automation",
    subtitle: "Gesture Control System",
    description: "A home automation system that controls appliances using air gestures for touchless interaction.",
    tags: ["IoT", "Gesture", "Embedded"],
    image: virtualMouseImg,
  },
  {
    title: "Geo-Transport Monitoring",
    subtitle: "Patent ID: 2021097501",
    description: "A GPS-based tag system for tracking exported goods and detecting losses during transportation.",
    tags: ["GPS", "IoT", "Patent"],
    image: null,
  },
];

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

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
              className={`group rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card overflow-hidden transition-all duration-400 ${project.highlight ? "glow" : ""} ${(project as any).expandable ? "cursor-pointer" : ""}`}
              onClick={() => {
                if ((project as any).expandable) {
                  setExpandedProject(expandedProject === project.title ? null : project.title);
                }
              }}
            >
              <div className="flex flex-col md:flex-row">
                {project.image && (
                  <div className="md:w-64 h-44 md:h-auto overflow-hidden shrink-0 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={640}
                      height={512}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {(project as any).expandable && (
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
                    {(project as any).expandable && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-mono">
                        {expandedProject === project.title ? "Click to collapse" : "▶ Click to watch demos"}
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

              {/* Expandable video section */}
              <AnimatePresence>
                {(project as any).expandable && expandedProject === project.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-border">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {endoscopicVideos.map((url, idx) => (
                          <div key={idx} className="rounded-xl overflow-hidden border border-border bg-background">
                            <video
                              src={url}
                              controls
                              preload="metadata"
                              className="w-full aspect-video object-cover"
                              playsInline
                            />
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 mt-4">
                        <a
                          href={(project as any).githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                        >
                          <Github className="w-4 h-4" /> Read full project on GitHub
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href={(project as any).linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                        >
                          <Linkedin className="w-4 h-4" /> View on LinkedIn
                          <ExternalLink className="w-3 h-3" />
                        </a>
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
