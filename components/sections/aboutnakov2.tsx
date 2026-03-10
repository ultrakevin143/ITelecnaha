"use client";
import { ABOUTNAKO } from "@/lib/aboutv2";
import { User } from "lucide-react";

export function Aboutnakov2() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <User className="w-5 h-5 text-emerald-500" />
        About Me
      </h2>
      <div className="bg-card text-card-foreground rounded-xl p-8 leading-relaxed border shadow-sm">
        {ABOUTNAKO.profile.about}
      </div>
    </section>
  );
}