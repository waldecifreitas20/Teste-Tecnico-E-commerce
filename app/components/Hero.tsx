import { Link } from "react-router";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import heroMobile from "~/assets/hero-mobile.svg";
import heroDesktop from "~/assets/hero-desk.jpg";
import { Image } from "./Image";

export function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");


  return (
    <section className="block">
      <Link to="/">
        <Image
          alt="Hero"
          src={isDesktop ? heroDesktop : heroMobile}
          height="h-[300px] lg:h-[400px]"
        />
      </Link>
    </section>
  )
}