
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-900/10">
        <img
          src={images[currentImage]}
          alt={`${name} - Image ${currentImage + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={prevImage}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={nextImage}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentImage ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentImage(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
