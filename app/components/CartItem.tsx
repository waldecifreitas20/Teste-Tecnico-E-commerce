import type { CartItem } from "~/types/cartItem";
import { QuantityInput } from "./QuantityInput";
import { useContext } from "react";
import { CartContext } from "~/provider/CartProvider";

export function CartItem({ item }: { item: CartItem }) {
  const cart = useContext(CartContext);

  return (
    <li
      className="
      bg-white p-2 overflow-hidden
      border border-slate-200 rounded-md
      flex items-center gap-2
      ">
      <img
        className="size-1/2"
        src={item.product.images[0]}
        alt={item.product.title}
      />

      <span className="w-full">
        <button className="text-red-500 text-sm ">
          <i className="fa-solid fa-trash"></i>
          Remover
        </button>
        <p className="text-sm">{item.product.title}</p>
        <p className="font-bold my-2 price text-nowrap">R$ {item.product.price.toFixed(2)}</p>
        <QuantityInput
          initialValue={item.quantity}
          onChangeValue={(qtd) => cart.updateQuantity(item.id, qtd)} />


      </span>
    </li>
  )
}