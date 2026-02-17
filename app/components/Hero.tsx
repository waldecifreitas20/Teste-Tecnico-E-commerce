import { Link } from "react-router";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import heroMobile from "~/assets/hero-mobile.svg";
import heroDesktop from "~/assets/hero-desk.jpg";

export function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");


  return (
    <Link to="/">
      <img
        className="w-full mb-4"
        src={isDesktop ? heroDesktop : heroMobile}
        alt="Hero"
      />
    </Link>
  )
}