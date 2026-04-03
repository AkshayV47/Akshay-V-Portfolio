import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

interface MobileNavProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const MobileNav = ({ isDark, toggleTheme }: MobileNavProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/60">
            <img src={profileAvatar} alt="Akshay V" className="w-full h-full object-cover" />
          </div>
          <span className="font-semibold text-sm text-foreground">Akshay V</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-card/95 backdrop-blur-xl border-b border-border px-4 py-4"
          >
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-sm text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
