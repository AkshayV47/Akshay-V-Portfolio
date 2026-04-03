import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const ThemeToggle = ({ isDark, toggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggle}
      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
