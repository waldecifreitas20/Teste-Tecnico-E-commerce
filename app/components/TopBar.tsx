import { Link } from "react-router";
import { DrawerMenu } from "./DrawerMenu";
import { Box } from "./Box";

export function TopBar() {
  const options = [
    { icon: <i className="fa-solid fa-house"></i>, label: "Home", link: "/" },
    { icon: <i className="fa-solid fa-cart-shopping"></i>, label: "Carrinho", link: "/carrinho" },
  ];
  return (
    <header className="bg-blue-400">
      <Box
        className="
        flex items-center 
        md:justify-between 
        w-full gap-4 
        text-white py-4">
        
        <DrawerMenu options={options} />
        <h1 className="font-bold">SHOPTRIX <i className="fa-brands fa-opencart"></i></h1>

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