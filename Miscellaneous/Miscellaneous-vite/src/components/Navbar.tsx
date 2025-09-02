import { useState } from "react";
import { Menu, X, Github, Info, Mail, Home, Moon, Sun } from "lucide-react";
import NormalButton from "./NormalButton";
import HamburgerButton from "./HamburgerButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <nav className="w-full bg-black/30 backdrop-blur-sm text-white px-4 md:px-6 py-3 mb-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <h1 className="text-black text-2xl font-semibold">Todo App</h1>
        <img src="/vite.svg" alt="Logo" className="h-8 md:hidden" />
        <button
          onClick={toggleDark}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={isDark}
          title={isDark ? "Light mode" : "Dark mode"}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 shadow-sm hover:shadow-md backdrop-blur transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <span className="text-lg">{isDark ? <Sun /> : <Moon />}</span>
          <span className="hidden sm:inline text-sm font-medium">
            {isDark ? "Light" : "Dark"}
          </span>
        </button>
        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <NormalButton text="Home" icon={<Home size={16} />} linkto="/" />
          <NormalButton
            text="GitHub"
            icon={<Github size={16} />}
            linkto="https://github.com/EELE14/"
          />
          <NormalButton
            text="Contact"
            icon={<Mail size={16} />}
            linkto="/contact"
          />
          <NormalButton text="Info" icon={<Info size={16} />} linkto="/info" />
        </div>
        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md bg-white/20 hover:bg-white/50 transition-colors"
          >
            {open ? (
              <X color="black" size={20} />
            ) : (
              <Menu color="black" size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 px-2">
          <div className="flex flex-col gap-2 bg-black/40 backdrop-blur-sm rounded-md p-2 shadow-lg">
            <HamburgerButton text="Home" icon={<Home size={16} />} linkto="/" />
            <HamburgerButton
              text="Contact"
              icon={<Mail size={16} />}
              linkto="/contact"
            />
            <HamburgerButton
              text="GitHub"
              icon={<Github size={16} />}
              linkto="https://github.com/EELE14/"
            />
            <HamburgerButton
              text="Info"
              icon={<Info size={16} />}
              linkto="/info"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
