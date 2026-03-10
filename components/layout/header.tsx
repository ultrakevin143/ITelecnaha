"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { useTheme } from "next-themes";
import { RESUME_DATA } from "../../lib/data";
import { Moon, Sun, Volume2, VolumeX } from "lucide-react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play blocked:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <audio ref={audioRef} loop src="/bgm1.mp3" />
      <div className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-6">
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
            {RESUME_DATA.profile.name}.
          </Link>
          <nav className="hidden md:flex gap-6">
  <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
    Home
  </Link>
  <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
    About me
  </Link>
  <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
    Projects
  </Link>
  <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
    Contact
  </Link>
</nav>
        </div>

     {/* ... inside your Header component ... */}

<div className="flex items-center gap-4">
  {/* Music Toggle Button */}
  <button 
    onClick={toggleAudio} 
    className="p-2 rounded-full hover:bg-accent transition-colors relative"
  >
    {isPlaying ? (
      <Volume2 className="w-5 h-5 text-primary" />
    ) : (
      <VolumeX className="w-5 h-5 text-muted-foreground" />
    )}
  </button>
  
  {/* Theme Toggle Button */}
  <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className="relative p-2 rounded-full hover:bg-accent transition-colors"
  >
    {/* This container ensures the icons stack on top of each other properly */}
    <div className="relative w-5 h-5">
      <Sun className="h-5 w-5 transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute top-0 left-0 h-5 w-5 transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </div>
    <span className="sr-only">Toggle theme</span>
  </button>
</div>
      </div>
    </header>
  );
}