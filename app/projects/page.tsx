import { FeaturedProjects } from "../../components/sections/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {}
      <div className="bg-muted/30 border-b mb-12">
        <div className="container mx-auto max-w-6xl px-6 py-10">
          <h1 className="text-5xl font-bold tracking-tighter  mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A collection of web applications and tools I've built, focusing on React, Next.js, and API integrations.
          </p>
        </div>
      </div>

      {}
      <div className="container mx-auto max-w-6xl px-6">
        <FeaturedProjects />
      </div>
    </div>
  );
}