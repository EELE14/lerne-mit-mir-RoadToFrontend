import { useState } from "react";
import { Menu, X, Github, Info, Mail, Home } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black/30 backdrop-blur-sm text-white px-4 md:px-6 py-3 mb-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <h1 className="text-black text-2xl font-semibold">Todo App</h1>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            aria-label="Home"
            className="flex items-center gap-2 bg-white/10 text-black px-3 py-1.5 rounded-md hover:bg-white/50 transition-colors border-1 border-black"
          >
            <Home size={16} />
            <span>Home</span>
          </button>
          <button
            aria-label="Contact"
            className="flex items-center gap-2 bg-white/10 text-black px-3 py-1.5 rounded-md hover:bg-white/50 transition-colors border-1 border-black"
          >
            <Mail size={16} />
            <span>Contact</span>
          </button>
          <button
            aria-label="GitHub"
            className="flex items-center gap-2 bg-white/10 text-black px-3 py-1.5 rounded-md hover:bg-white/50 transition-colors border-1 border-black"
          >
            <Github size={16} />
            <span>GitHub</span>
          </button>
          <button
            aria-label="Info"
            className="flex items-center gap-2 bg-white/10 text-black px-3 py-1.5 rounded-md hover:bg-white/50 transition-colors border-1 border-black"
          >
            <Info size={16} />
            <span>Info</span>
          </button>
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
            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors text-left">
              <Home size={16} /> <span>Home</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors text-left">
              <Mail size={16} /> <span>Contact</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors text-left">
              <Github size={16} /> <span>GitHub</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors text-left">
              <Info size={16} /> <span>Info</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
