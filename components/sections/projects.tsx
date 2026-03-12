"use client";
import { RESUME_DATA } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export function FeaturedProjects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <Github className="w-5 h-5 text-emerald-500" />
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RESUME_DATA.projects.map((project) => (
          <Link 
             key={project.id}
             href={`${project.projectUrl}`}
            className="group relative border rounded-xl overflow-hidden transition-all duration-300 bg-card hover:shadow-lg hover:scale-[1.02]"
          >
            <div className="w-full h-48 overflow-hidden bg-muted">
              <img 
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
              </div>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-mono text-emerald-600 bg-emerald-100 border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}