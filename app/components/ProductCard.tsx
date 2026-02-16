import type { Product } from "~/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article
      className="bg-white border h-fit border-slate-200 rounded-md relative ">
      <span
        className="badge absolute top-2 right-0">Oferta!</span>
      <img
        className="h-42 w-full object-cover block"
        src={product.images[0]}
        alt={product.title} />

      <section className="p-2 flex grow flex-col justify-between">
        <div>

          <p className="text-sm">{product.title}</p>
          <p className="text-slate-400 line-through text-sm mt-2">R$ {(product.price * 1.4).toFixed(2)}</p>
          <p className="text-slate-800 font-semibold text-lg mb-4">R$ {product.price.toFixed(2)}</p>
        </div>

        <button className="accent">Comprar</button>
      </section>
    </article>
  );
}