import { motion } from "framer-motion";
import profileAvatar from "@/assets/profile-avatar.jpg";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const skills = ["Python", "C", "AI/ML", "IoT", "ESP32", "OpenCV"];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/AkshayV47", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/akshay-v-3b589b28a/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:itzakshay2005@gmail.com", label: "Email" },
];

interface SidebarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Sidebar = ({ isDark, toggleTheme }: SidebarProps) => {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 h-screen w-72 bg-card/80 backdrop-blur-xl border-r border-border flex-col items-center py-10 px-6 z-50 overflow-y-auto hidden lg:flex"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="relative mb-4">
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/60 glow">
          <img src={profileAvatar} alt="Akshay V" width={112} height={112} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-card animate-pulse" />
      </div>

      <h1 className="text-xl font-bold text-foreground">Akshay V</h1>
      <p className="text-xs text-primary font-mono mt-1">ECE Student & Innovator</p>
      <p className="text-xs text-muted-foreground mt-0.5">Salem, Tamil Nadu</p>

      <div className="flex flex-wrap gap-1.5 mt-5 justify-center">
        {skills.map((skill) => (
          <span key={skill} className="text-[10px] px-2.5 py-1 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-default">
            {skill}
          </span>
        ))}
      </div>

      <nav className="mt-8 w-full space-y-1">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block w-full text-center py-2.5 rounded-lg text-sm text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="/Akshay_V_Resume.pdf"
        download
        className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300"
      >
        <Download size={14} /> Resume
      </a>

      <div className="mt-4 w-full">
        <ThemeToggle isDark={isDark} toggle={toggleTheme} />
      </div>

      <div className="mt-auto pt-6 flex gap-5">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label={link.label}
          >
            <link.icon size={18} />
          </a>
        ))}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
