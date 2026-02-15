import axios from "axios";
import type { Route } from "./+types/Home";
import type { Product } from "~/types/product";
import { ProductCard } from "~/components/ProductCard";

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

      <section className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {products.map(product => {
          return <ProductCard product={product} />
        })}
      </section>

    </main >
  );
}

export function HydrateFallback() {
  return <div>Carregando produtos...</div>;
}
