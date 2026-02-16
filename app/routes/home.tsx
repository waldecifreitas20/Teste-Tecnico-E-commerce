import axios from "axios";
import type { Route } from "./+types/Home";
import type { Product } from "~/types/product";
import { ProductCard } from "~/components/ProductCard";
import { ProductView } from "~/components/ProductView";
import { Box } from "~/components/Box";

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
    <>
      <Box>
        <h1>Produtos</h1>

        <ProductView>
          {products.map(product => {
            return <ProductCard product={product} />
          })}
        </ProductView>
      </Box>
    </>
  );
}

export function HydrateFallback() {
  return <div>Carregando produtos...</div>;
}
