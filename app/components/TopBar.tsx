import { Link } from "react-router";
import { MobileMenu } from "./MobileMenu";
import { Box } from "./Box";
import { Logo } from "./Logo";

export function TopBar() {
  const options = [
    { icon: <i className="fa-solid fa-house"></i>, label: "Home", link: "/" },
    { icon: <i className="fa-solid fa-cart-shopping"></i>, label: "Carrinho", link: "/carrinho" },
  ];
  return (
    <header className="bg-slate-800 relative">
      <Box
        className="
        flex items-center 
        md:justify-between 
        w-full gap-4 
        text-white py-2">
        <MobileMenu options={options} />

        <Link to="/" className="absolute  z-0 left-0 w-full flex justify-center mx-auto">
          <Logo />
        </Link>

        <nav className="hidden md:block">
          <Link to="/carrinho">
            R$ 0,00
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </nav>
      </Box>
    </header >
  );
}