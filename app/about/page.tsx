import { Aboutnakov2 } from "../../components/sections/aboutnakov2";
import { Skills } from "../../components/sections/skills";
import { Certificates } from "../../components/sections/certificates";
import { Experience } from "@/components/sections/experience";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-10 space-y-20">
      <Aboutnakov2 />
      <Skills />
       <Experience />
      <Certificates />
    </div>
  );
}