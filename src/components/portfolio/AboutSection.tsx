import { motion } from "framer-motion";
import profileAvatar from "@/assets/profile-avatar.jpg";
import { Award, Cpu, Rocket, GraduationCap, Trophy } from "lucide-react";

const highlights = [
  { icon: Trophy, text: "World Record — Kalam's World Records & International Book of Records" },
  { icon: Award, text: "Best Student 2025 — ECE, Sona College of Technology" },
  { icon: Rocket, text: "NASA Young Scientist for a Day — 2020-21" },
  { icon: GraduationCap, text: "B.E. ECE — SONA College of Technology (CGPA: 7.4)" },
  { icon: Cpu, text: "Secretary — IIT Build Club, SONA (IIT Madras Research Park)" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-8">About Me 🧑‍💻</h2>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-44 h-44 rounded-2xl overflow-hidden border border-border glow shrink-0"
          >
            <img src={profileAvatar} alt="Akshay V" loading="lazy" width={192} height={192} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>

          <div className="flex-1 space-y-4">
            <p className="text-secondary-foreground leading-relaxed">
              I am Akshay, a passionate developer, innovator, and <span className="text-primary font-semibold">world record holder</span> recognized
              by Kalam's World Records and International Book of Records for creating <strong>Ramachandran A-1</strong> — the world's smallest
              and lightest wooden femto-category satellite (3.5 cm³, ~27 grams, teak wood). 🛰️
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              I specialize in Embedded Systems, IoT, RTOS, and AI-based applications with hands-on experience in C, Python,
              ESP32, STM32, Raspberry Pi, and computer vision with OpenCV. 😎
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As the Secretary of SONA Build Club (IIT Madras Research Park), I actively participate in hackathons and lead innovation initiatives.
              My goal is to develop impactful products in AI, robotics, and space technology. 🎯
            </p>
          </div>
        </div>

        <div className="grid gap-2.5 mt-8">
          {highlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <h.icon size={16} className="text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{h.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
