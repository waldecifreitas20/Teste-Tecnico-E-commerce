import { useState } from "react";

export function Image({src, alt}: {src: string, alt: string}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <>
      {!imageLoaded && (
        <div className="h-42 w-full bg-slate-200 animate-pulse" />
      )}

      <img
        className={`h-42 w-full object-cover block ${!imageLoaded ? "hidden" : ""}`}
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
}