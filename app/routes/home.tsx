import axios from "axios";
import type { Route } from "./+types/Home";
import type { Product } from "~/types/product";

export async function loader({ params }: Route.LoaderArgs) {
  try {

    const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=10`)
    return data;

  } catch (error) {
    return [];
  }
}

export default function Home({
  loaderData
}: Route.ComponentProps) {
  const products = loaderData as any as Product[];

  return (
    <main className="responsible">
      <h1>Produtos</h1>

      <section className="grid grid-cols-2 gap-2">
        {products.map(product => {
          return <article className="bg-white border border-slate-200 rounded-md">
            <div className="h-32 w-full overflow-clip">
              <img className="w-full block" src={product.images[0]} alt={product.title} />
            </div>
            <div className="px-2 flex flex-col justify-between">
              <p className="text-sm">{product.title}</p>
              <p className="text-slate-800 font-semibold text-lg mb-4">R$ {product.price.toFixed(2)}</p>

              <button className="cursor-pointer hover:bg-green-600 bg-green-500 text-white font-medium text-sm w-full py-2 rounded-md">Comprar</button>
            </div>
          </article>
        })}
      </section>

    </main >
  );
}

export function HydrateFallback() {
  return <div>Carregando produtos...</div>;
}
