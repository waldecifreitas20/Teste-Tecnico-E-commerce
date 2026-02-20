import { useEffect, useRef, useState } from "react";

export function Image({ src, alt, height = "h-42" }: { src: string, alt: string, height?: string }) {
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
        <div className={`${height} w-full bg-slate-200 animate-pulse`} />
      )}

      <img
        ref={imgRef}
        className={`${height} w-full object-cover ${!imageLoaded ? "hidden" : "block"}`}
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
}