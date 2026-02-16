import type { CartItem } from "~/types/cartItem";
import { QuantityInput } from "./QuantityInput";
import { useContext } from "react";
import { CartContext } from "~/provider/CartProvider";

export function CartItem({ item }: { item: CartItem }) {
  const cart = useContext(CartContext);

  return (
    <li
      className="
       overflow-hidden
       border-slate-200 rounded-md
      flex items-center gap-2
      ">
      <img
        className="size-1/3 rounded-md"
        src={item.product.images[0]}
        alt={item.product.title}
      />

      <span className="w-full p-2">

        <p className="text-sm">{item.product.title}</p>
        <p className="font-bold my-2 price text-nowrap">R$ {item.product.price.toFixed(2)}</p>

        <div className="flex justify-start gap-4">
          <QuantityInput
            initialValue={item.quantity}
            onChangeValue={(qtd) => cart.updateQuantity(item.id, qtd)} />

          <button
            onClick={() => cart.removeItem(item.id)}
            className="text-red-500 text-sm p-0 m-0">
            <i className="fa-solid fa-trash fa-xl"></i>

          </button>
        </div>

      </span>
    </li>
  )
}