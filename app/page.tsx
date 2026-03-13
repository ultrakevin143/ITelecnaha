import { Hero } from "../components/sections/hero";
import { Skills } from "../components/sections/skills";
import { FeaturedProjects } from "../components/sections/projects";
import { ContactCTA } from "../components/sections/cta"; // Import it here
import { Aboutnakov2 } from "@/components/sections/aboutnakov2";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 space-y-12">
      <Hero />
      <div className="grid grid-cols-1">
        <Skills />
      </div>      
      {}
      <div className="space-y-10 pb-12">
        <FeaturedProjects />
        {}
        <div className="flex justify-center">
          <Link 
            href="/projects" 
            className="flex items-center gap-5   px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all shadow-sm hover:shadow-md"
          >
            View All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        
        </div>
        <ContactCTA />
      </div>  
      
    </div>
  );
}