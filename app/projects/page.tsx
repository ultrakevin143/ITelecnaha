import { FeaturedProjects } from "../../components/sections/projects";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 space-y-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      </div>
      <FeaturedProjects />
    </div>
  );
}