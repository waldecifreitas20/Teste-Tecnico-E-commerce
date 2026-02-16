import { useContext } from "react";
import { Box } from "~/components/Box";
import { CartItem } from "~/components/CartItem";
import { CartContext } from "~/provider/CartProvider";

export default function Cart() {
  const cart = useContext(CartContext);

  return (
    <Box>
      <h1 className="text-xl font-semibold mt-4">Seu carrinho</h1>
      <ul className="flex flex-col gap-4">
        {cart.getItems().map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </Box>
  );
}