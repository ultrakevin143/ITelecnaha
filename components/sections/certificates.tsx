"use client";
import { RESUME_DATA } from "@/lib/data";
import { Award, ExternalLink } from "lucide-react";
import { useState } from "react";
import { ZoomModal } from "../../components/zoom-modal";

export function Certificates() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  // Fallback if there's no certificate data yet
  if (!RESUME_DATA.certificates || RESUME_DATA.certificates.length === 0) {
      return null;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Award className="w-5 h-5 text-emerald-500" />
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> 
        {RESUME_DATA.certificates.map((cert, idx) => (
          <div 
            key={idx} 
            onClick={() => setZoomImage(cert.fullCertificateUrl)}
            className="group flex items-start p-4 border rounded-xl transition-all shadow-sm cursor-pointer bg-card hover:shadow-md"
          >
            <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden mr-4 border mt-1 bg-muted">
              <img 
                src={cert.imageUrl}
                alt={cert.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold truncate group-hover:text-emerald-500 transition-colors">{cert.name}</h4>
              <p className="text-sm text-muted-foreground truncate mb-1 sm:mb-0">{cert.issuer}</p>
            </div>
            <div className="ml-4 flex flex-col items-end gap-1 shrink-0">
              <span className="text-[10px] font-mono text-emerald-600 bg-emerald-100 border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20 px-2 py-1 rounded whitespace-nowrap">
                {cert.date}
              </span>
              <a 
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} 
                className="p-1 rounded-full hover:bg-accent self-end"
              >
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {zoomImage && (
        <ZoomModal imageUrl={zoomImage} onClose={() => setZoomImage(null)} />
      )}
    </section>
  );
}