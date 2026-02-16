import { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

export function ProductImages({ images }: ProductImagesProps) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  function changeImage(image: string) {
    setCurrentImage(image);
  }

  return (
    <section className="relative">
      <img src={currentImage} />

      <ul
        className="
        m-2 p-2 rounded-md 
        flex gap-2 mx-auto
        bg-white w-fit 
        absolute bottom-0 left-0 right-0 ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            onClick={() => changeImage(image)}
            className={`size-12 object-cover ${currentImage === image ? "opacity-100" : "opacity-35"}`}
          />
        ))}
      </ul>
    </section>
  )
}