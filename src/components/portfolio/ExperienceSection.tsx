import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Secretary",
    company: "SONA Build Club (IIT Madras Research Park)",
    period: "2024 – Present",
    description: "Leading innovation initiatives, organizing hackathons, and mentoring students in IoT and embedded systems projects.",
  },
  {
    role: "ECE Student & Innovator",
    company: "SONA College of Technology",
    period: "2022 – Present",
    description: "Pursuing B.E. in Electronics & Communication Engineering with a focus on embedded systems, AI, and space technology.",
  },
  {
    role: "NASA Young Scientist",
    company: "NASA Young Scientist for a Day",
    period: "2020 – 2021",
    description: "Selected for NASA's Young Scientist program, contributing research on satellite miniaturization.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-8">Experience 💼</h2>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card p-5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Briefcase size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-primary font-mono">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
