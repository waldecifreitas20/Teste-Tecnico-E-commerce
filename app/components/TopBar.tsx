import { Link } from "react-router";
import { MobileMenu } from "./MobileMenu";
import { Box } from "./Box";
import { Logo } from "./Logo";
import { useContext } from "react";
import { CartContext } from "~/provider/CartProvider";

export function TopBar() {
  const options = [
    { icon: <i className="fa-solid fa-house"></i>, label: "Home", link: "/" },
    { icon: <i className="fa-solid fa-cart-shopping"></i>, label: "Carrinho", link: "/carrinho" },
  ];

  const { getTotal, getQuantityTotal } = useContext(CartContext);

  return (
    <header className="bg-slate-800 relative">
      <div
        className="
        bg-orange-500 
        text-white font-medium text-center 
        py-2 text-sm
        overflow-hidden"
      >
        <p className="animate-marquee md:animate-none w-full text-center uppercase">
          Frete grátis para todo o Brasil acima de R$ 200,00
        </p>
      </div>

      <Box
        className="
        flex items-center 
        md:justify-between 
        gap-4 
        text-white py-2 md:py-6">
        <MobileMenu options={options} />

        <Link to="/" className="absolute  z-0 left-0 w-full flex justify-center mx-auto">
          <Logo />
        </Link>

        <nav className="hidden md:block">
          <Link to="/carrinho" className="relative ml-1">

            R$ {getTotal().toFixed(2).replace('.', ',')}
            {/* CART COUNT ICON */}
            <span
              className="
                absolute -top-2 -right-2 
                bg-orange-500 text-white text-xs 
                size-4 
                flex items-center justify-center
                rounded-full
                ">{getQuantityTotal()}</span>

            <i className="fa-solid fa-cart-shopping"></i>

          </Link>
        </nav>
      </Box>
    </header >
  );
}