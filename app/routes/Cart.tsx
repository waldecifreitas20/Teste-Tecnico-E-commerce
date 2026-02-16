import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { Box } from "~/components/Box";
import { CartItem } from "~/components/CartItem";
import { CartView } from "~/components/CartView";
import { CartContext } from "~/provider/CartProvider";

export default function Cart() {
  const cart = useContext(CartContext);

  return (
    <>
      <Box className="pb-[150px]">
        <h1 className="text-xl font-semibold mt-4">Seu carrinho</h1>
        <CartView>
          {cart.getItems().map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </CartView>
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

          <Link to={"/"}>
            <button
              disabled={cart.getItems().length === 0}
              onClick={() => {
                alert("Compra finalizada com sucesso!");
                cart.clearCart();
              }}
              className="
                accent text-white 
                px-4 py-2 
                rounded-md 
                disabled:opacity-50 disabled:cursor-not-allowed">Finalizar compra</button>

          </Link>
        </Box>
      </footer>
    </>
  );
}