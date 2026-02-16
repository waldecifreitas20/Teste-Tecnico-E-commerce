import { useContext } from "react";
import { Box } from "~/components/Box";
import { CartItem } from "~/components/CartItem";
import { CartContext } from "~/provider/CartProvider";

export default function Cart() {
  const cart = useContext(CartContext);

  return (
    <>
      <Box>
        <h1 className="text-xl font-semibold mt-4">Seu carrinho</h1>
        <ul className="flex flex-col gap-4">
          {cart.getItems().map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      </Box>

      <footer
        className="
        bg-slate-800 
        fixed bottom-0 left-0
        w-full block
        py-4 text-slate-200
        ">
        <Box>
          <p className="text-sm">Items: {cart.getItems().length}</p>
          <p className="font-semibold mb-4">Total: R$ {cart.getTotal().toFixed(2)}</p>
          <button className="accent text-white px-4 py-2 rounded-md">Finalizar compra</button>
        </Box>
      </footer>
    </>
  );
}