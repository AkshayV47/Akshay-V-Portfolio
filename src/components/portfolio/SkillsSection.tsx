import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    emoji: "💻",
    skills: ["C", "Java", "Python", "MATLAB", "SQL"],
  },
  {
    title: "AI & ML",
    emoji: "🧠",
    skills: ["OpenCV", "Machine Learning", "Computer Vision", "AI Integration"],
  },
  {
    title: "Core / Hardware",
    emoji: "🔧",
    skills: ["Circuit Design", "HM & SMD Soldering", "Microcontroller Programming", "Embedded Systems", "RTOS", "Raspberry Pi", "STM32", "Arduino", "ESP Series", "ATmega328P"],
  },
  {
    title: "Area of Interest",
    emoji: "🎯",
    skills: ["Embedded Systems Development", "IoT", "AI in Electronics", "AI-Powered Apps", "Real-Time Systems & Automation"],
  },
  {
    title: "Key Strengths",
    emoji: "💪",
    skills: ["Leadership", "Public Speaking", "Problem Solving"],
  },
  {
    title: "Languages",
    emoji: "🌐",
    skills: ["English — Proficient", "Tamil — Native", "Kannada — Fluent"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-8">Skills 🛠️</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card p-5 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-foreground mb-3">{cat.emoji} {cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
