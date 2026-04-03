import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import heroBanner from "@/assets/hero-banner.jpg";
import profileAvatar from "@/assets/profile-avatar.jpg";

const techStack = ["Python", "C", "Java", "AI/ML", "IoT", "OpenCV", "ESP32", "RTOS", "STM32", "ArduPilot", "MATLAB", "Python", "C", "Java", "AI/ML", "IoT", "OpenCV", "ESP32"];

const typewriterPhrases = [
  { prefix: "I create", word: "AI, IoT & embedded projects." },
  { prefix: "I build", word: "intelligent systems." },
  { prefix: "I create", word: "real-world tech projects." },
  { prefix: "I design", word: "smart systems." },
  { prefix: "I create", word: "intelligent machines." },
  { prefix: "I build", word: "innovative tech solutions." },
  { prefix: "I create", word: "AI-powered hardware." },
  { prefix: "I design", word: "embedded innovations." },
  { prefix: "I create", word: "smart tech projects." },
  { prefix: "I build", word: "AI & IoT solutions." },
];

const HeroSection = () => {
  const { prefix, typedWord } = useTypewriter(typewriterPhrases, 80, 50, 1800);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-72 -mx-6 md:-mx-12 lg:-mx-16 overflow-hidden">
        <img src={heroBanner} alt="Tech cityscape banner" width={1920} height={512} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative z-10 mt-48 mb-6"
      >
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-background glow">
          <img src={profileAvatar} alt="Akshay V" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <div className="absolute inset-0 dot-pattern opacity-20 top-72" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-primary" />
          <p className="text-primary text-sm font-mono">🏆 World Record Holder • Salem, Tamil Nadu</p>
        </motion.div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
          Hey, I'm Akshay! 👋
        </h2>

        <p className="text-2xl md:text-3xl font-semibold mt-4 text-muted-foreground">
          <span className="text-foreground">{prefix} </span>
          <span className="text-gradient">{typedWord}</span>
          <span className="animate-blink text-primary">|</span>
        </p>

        <p className="text-muted-foreground text-lg mt-6 max-w-xl leading-relaxed">
          From the world's smallest wooden satellite 🛰️ to autonomous drones and wearable AI —
          I turn ambitious ideas into working hardware and software. 🚀
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <motion.a href="#projects" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/20 transition-shadow">
            See Projects ✨
          </motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="px-7 py-3.5 rounded-xl border border-border text-secondary-foreground hover:border-primary/50 hover:text-primary transition-all">
            Get in touch 💬
          </motion.a>
        </div>
      </motion.div>

      <div className="relative mt-16 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap gap-10">
          {techStack.map((tech, i) => (
            <span key={i} className="text-muted-foreground/30 text-sm font-mono">{tech}</span>
          ))}
        </div>
      </div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/40 hidden md:block">
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
