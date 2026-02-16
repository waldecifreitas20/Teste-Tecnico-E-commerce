import { useEffect, useRef, useState } from "react";

export function Image({ src, alt }: { src: string, alt: string }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setImageLoaded(false);
    // Check if image is already loaded from cache
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <>
      {!imageLoaded && (
        <div className="h-42 w-full bg-slate-200 animate-pulse" />
      )}

      <img
        ref={imgRef}
        className={`h-42 w-full object-cover  ${!imageLoaded ? "hidden" : "block"}`}
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
}