"use client";
import { RESUME_DATA } from "@/lib/data";
import { User } from "lucide-react";

export function About() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <User className="w-5 h-5 text-emerald-500" />
        About Me
      </h2>
      <div className="bg-card text-card-foreground rounded-xl p-8 leading-relaxed border shadow-sm">
        {RESUME_DATA.profile.about}
      </div>
    </section>
  );
}