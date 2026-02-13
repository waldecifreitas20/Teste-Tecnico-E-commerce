import { Link } from "react-router";
import { Drawer } from "./Drawer";

export function TopBar() {
  const options = [
    { icon: <i className="fa-solid fa-house"></i>, label: "Home", link: "/" },
    { icon: <i className="fa-solid fa-cart-shopping"></i>, label: "Carrinho", link: "/" },
  ];
  return (
    <header className="flex items-center bg-blue-400 w-full gap-4 text-white py-4 responsible">
      <h1 className="font-bold">SHOPTRIX</h1>
      <Drawer options={options} />
    </header>
  );
}