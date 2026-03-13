"use client";

import React from "react";
import { Mail, Phone, Github, Facebook , Linkedin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Info Column */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold tracking-tighter mb-4">Let's Talk.</h1>
              <p className="text-xl text-muted-foreground">
                Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email me at</p>
                  <p className="text-lg font-semibold">kevinmercado987@gmail.com</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Call or Text lang Sa</p>
                  <p className="text-lg font-semibold">+63 991 359 9342</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">You can also reach out through my socials</p>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin />, link: "https://www.linkedin.com/in/mercado-kevin-5957713b2/" },
                  { icon: <Github />, link: "https://github.com/ultrakevin143" },
                  { icon: <Facebook />, link: "https://www.facebook.com/osaka.kun.90" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form Column */}
          <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
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
          </div>

        </div>
      </div>
    </div>
  );
}