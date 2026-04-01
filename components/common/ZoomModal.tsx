"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface ZoomModalProps {
  imageUrl: string;
  onClose: () => void;
}

export function ZoomModal({ imageUrl, onClose }: ZoomModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-100 flex items-center justify-center p-4 backdrop-blur-md bg-background/90 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[95vh] overflow-hidden rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()} 
      >
        <img 
          src={imageUrl} 
          alt="Zoomed Content" 
          className="w-full h-full object-contain"
        />
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-3 rounded-full transition-colors z-10 bg-black/50 text-white hover:bg-black/80"
          title="Close"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}