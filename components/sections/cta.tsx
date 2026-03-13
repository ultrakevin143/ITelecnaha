"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-1">
      <div className="bg-card border border-border rounded-3xl p-12 text-center space-y-8 shadow-2xl shadow-emerald-500/5">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Need help building something?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you’re searching for a dedicated partner to develop your project 
            or simply need expert support, I’m here to help.
          </p>
        </div>

        <div className="flex justify-center">
          <Link 
            href="/contact" 
            className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}