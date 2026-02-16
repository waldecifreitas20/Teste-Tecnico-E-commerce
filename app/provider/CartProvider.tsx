import { createContext, useState, useContext, type PropsWithChildren } from "react";
import type { CartItem } from "~/types/cartItem";
import type { Product } from "~/types/product";

interface CartContextType {
  addItem: (product: Product) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  getItems: () => CartItem[];
}

export const CartContext = createContext<CartContextType>({} as CartContextType);


export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addItem(product: Product) {
    alert("aaa")

    const item = cart.find((item) => item.product.id === product.id);

    if (item !== undefined) {
      return updateQuantity(item.id, item.quantity + 1);
    }

    setCart((prevCart) => [...prevCart, {
      id: product.id.toString(),
      quantity: 1,
      product,
    }]);
  }

  function updateQuantity(itemId: string, quantity: number) {
    if (quantity < 1) {
      // Optional: remove item if quantity is less than 1 
      // or just return if we want to enforce min 1
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  }

  function getItems() {
    return [...cart];
  }

  return (
    <CartContext.Provider value={{ addItem, updateQuantity, getItems }}>
      {children}
    </CartContext.Provider>
  );
}