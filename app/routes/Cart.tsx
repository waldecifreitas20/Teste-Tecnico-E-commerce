import { useContext } from "react";
import { Box } from "~/components/Box";
import { CartContext } from "~/provider/CartProvider";

export default function Cart() {
  const cart = useContext(CartContext);

  return (
    <Box>
      <h1>Cart {cart.getItems().length}</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {cart.getItems().map((item) => (
          <div key={item.id}>
            {item.product.title} - {item.quantity}
          </div>
        ))}
      </div>
    </Box>
  );
}