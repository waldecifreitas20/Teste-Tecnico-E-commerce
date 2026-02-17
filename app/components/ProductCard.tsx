import type { Product } from "~/types/product";
import { Image } from "./Image";
import { Link } from "react-router";

export function ProductCard({ product }: { product: Product }) {

  return (
    <Link
      to={`/produto/${product.slug}`}
      className="
      bg-white 
      border h-fit border-slate-200 rounded-md 
      relative
      hover:border-orange-500
      hover:shadow-md
      hover:shadow-orange-500/20
      transition-all
      duration-200
      ease-in-out
      ">
      <span
        className="badge absolute top-2 right-0">Oferta!</span>

      <Image src={product.images[0]} alt={product.title} />

      <section className="p-2 flex flex-col justify-between h-32">
        <p className="text-sm hover:text-orange-500">{product.title}</p>
        <div>
          <p className="text-slate-400 line-through text-sm mt-2">R$ {(product.price * 1.4).toFixed(2)}</p>
          <p className="text-slate-800 font-semibold text-lg mb-4">R$ {product.price.toFixed(2)}</p>
        </div>
      </section>
    </Link >
  );
}