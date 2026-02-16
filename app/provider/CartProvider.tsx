import { createContext, useState, useContext, type PropsWithChildren } from "react";
import type { CartItem } from "~/types/cartItem";
import type { Product } from "~/types/product";

interface CartContextType {
  removeItem: (itemId: string) => void;
  addItem: (product: Product, quantity: number) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  getItems: () => CartItem[];
}

export const CartContext = createContext<CartContextType>({} as CartContextType);


export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "0",
      product:
      {
        "id": 16,
        "title": "Classic White Tee - Timeless Style and Comfort",
        "slug": "classic-white-tee-timeless-style-and-comfort",
        "price": 73,
        "description": "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
        "category": {
          "id": 1,
          "name": "Category1771226586504",
          "slug": "category1771226586504",
          "image": "http://i.pravatar.cc/300?img=10",
        },
        "images": [
          "https://i.imgur.com/Y54Bt8J.jpeg",
          "https://i.imgur.com/SZPDSgy.jpeg",
          "https://i.imgur.com/sJv4Xx0.jpeg"
        ]
      },
      quantity: 10
    }
  ]);

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


  function removeItem(itemId: string) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  }

  function getItems() {
    return [...cart];
  }

  return (
    <CartContext.Provider value={{ addItem, updateQuantity, getItems, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}