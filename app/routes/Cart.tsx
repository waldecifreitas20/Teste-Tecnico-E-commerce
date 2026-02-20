import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { Box } from "~/components/Box";
import { CartItem } from "~/components/CartItem";
import { CartView } from "~/components/CartView";
import { CartContext } from "~/provider/CartProvider";

export default function Cart() {
  const cart = useContext(CartContext);

  return (
    <Box className="w-full lg:w-[80%] p-0 lg:flex lg:my-10 gap-5" >
      <Box className="min-h-[70vh] md:min-h-[50vh] lg:border-r lg:border-slate-200">
        <h1 className="text-xl font-semibold mt-4">Seu carrinho</h1>
        <CartView>
          {cart.getItems().map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </CartView>
      </Box>

      <section
        className="
        bg-slate-800 
        sticky bottom-0 left-0
        w-full block h-fit
        py-4 text-slate-200

        lg:w-[40%]
        lg:top-10 lg:bg-transparent lg:rounded-md lg:text-slate-800
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
      </section>
    </Box>
  );
}