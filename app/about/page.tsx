import { AboutHero } from "@/components/features/about/AboutHero";
import { Skills } from "@/components/features/about/Skills";
import { Certificates } from "@/components/features/about/Certificates";
import { Experience } from "@/components/features/about/Experience";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-10 space-y-20">
      <AboutHero />
      <Skills />
       <Experience />
      <Certificates />
    </div>
  );
}