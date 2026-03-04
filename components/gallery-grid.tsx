"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { galleryImages } from "@/lib/constants";

type GalleryGridProps = {
  preview?: boolean;
};

export function GalleryGrid({ preview = false }: GalleryGridProps) {
  const images = preview ? galleryImages.slice(0, 6) : galleryImages;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setSelectedImage(index)}
            className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-[#6a5535]/40 text-left"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080604]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="gold-label">{image.category}</p>
              <p className="mt-2 text-2xl text-white">{image.alt}</p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-4xl">
              <Button
                variant="subtle"
                className="absolute right-4 top-4 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
