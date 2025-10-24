import { useState, useEffect } from "react";

interface CarouselProps {
  images?: string[];
}

export default function Carousel({
  images = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?w=1200&q=80&auto=format&fit=crop",
  ],
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(() => images.map(() => false));
  const placeholder = "https://placehold.co/1200x800?text=Imagem+indisponivel";

  useEffect(() => {
    // preload imagens
    images.forEach((src, i) => {
      const img = new Image();
      img.onload = () => setLoaded((s) => { const copy = [...s]; copy[i] = true; return copy; });
      img.onerror = () => setLoaded((s) => { const copy = [...s]; copy[i] = false; return copy; });
      img.src = src;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg bg-gray-100">
      {images.map((src, index) => {
        const srcToUse = loaded[index] ? src : placeholder;
        return (
          <img
            key={index}
            src={srcToUse}
            alt={`Slide ${index}`}
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholder; }}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        );
      })}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === currentSlide ? "bg-white" : "bg-gray-400"}`}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
