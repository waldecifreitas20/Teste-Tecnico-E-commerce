import { createContext, useState, useContext, type PropsWithChildren } from "react";
import type { CartItem } from "~/types/cartItem";
import type { Product } from "~/types/product";

interface CartContextType {
  getQuantityTotal: () => number;
  removeItem: (itemId: string) => void;
  addItem: (product: Product, quantity: number) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  getItems: () => CartItem[];
  getTotal: () => number;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({} as CartContextType);


export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addItem(product: Product, quantity: number = 1) {
    const item = cart.find((item) => item.product.id === product.id);

    if (item !== undefined) {
      return updateQuantity(item.id, item.quantity + quantity);
    }

    setCart((prevCart) => [...prevCart, {
      id: product.id.toString(),
      quantity,
      product,
    }]);
  }

  function updateQuantity(itemId: string, quantity: number) {
    if (quantity < 1) {
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  }

  function getTotal() {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
  
  function getQuantityTotal() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }



  function removeItem(itemId: string) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  }

  function clearCart() {
    setCart([]);
  }

  function getItems() {
    return [...cart];
  }

  return (
    <CartContext.Provider value={{
      getTotal,
      getQuantityTotal,
      addItem,
      updateQuantity,
      getItems,
      removeItem,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}