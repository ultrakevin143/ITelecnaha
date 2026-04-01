"use client";

import React from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">First Name</label>
          <input
            type="text"
            placeholder="Kevin"
            className="w-full p-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Last Name</label>
          <input
            type="text"
            placeholder="Mercado"
            className="w-full p-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Email Address</label>
        <input
          type="email"
          placeholder="kevin@example.com"
          className="w-full p-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Your Message</label>
        <textarea
          rows={5}
          placeholder="How can I help you?"
          className="w-full p-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
        />
      </div>

      <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
        Send Message <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
