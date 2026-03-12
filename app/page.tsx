import { Hero } from "../components/sections/hero";
import { Skills } from "../components/sections/skills";
import { Experience } from "../components/sections/experience";
import { FeaturedProjects } from "../components/sections/projects";
import { ABOUTNAKO } from "@/lib/aboutv2";
import { Aboutnakov2 } from "@/components/sections/aboutnakov2";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 space-y-12">
      <Hero />
      <div className="grid grid-cols-1 ">
        <Skills />
      </div>
      <Experience />
      <FeaturedProjects />
    </div>
  );
}