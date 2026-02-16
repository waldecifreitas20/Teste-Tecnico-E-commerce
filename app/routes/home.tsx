import type { Route } from "./+types/Home";
import type { Product } from "~/types/product";
import { ProductCard } from "~/components/ProductCard";
import { ProductView } from "~/components/ProductView";
import { Box } from "~/components/Box";
import { productsService } from "~/services/ProductService";

export async function loader() {
  try {
    return await productsService.getAll();
  } catch (error) {
    return [];
  }
}

export default function Home({
  loaderData
}: Route.ComponentProps) {
  const products: Product[] = loaderData;

  return (
    <>
      <Box>
        <h1>Produtos</h1>

        <ProductView>
          {products.map(product => {
            return <ProductCard key={product.slug} product={product} />
          })}
        </ProductView>
      </Box>
    </>
  );
}

export function HydrateFallback() {
  return <div>Carregando produtos...</div>;
}
