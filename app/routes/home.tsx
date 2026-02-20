import type { Route } from "./+types/home";
import type { Product } from "~/types/product";
import { ProductCard } from "~/components/ProductCard";
import { ProductView } from "~/components/ProductView";
import { Box } from "~/components/Box";
import { productsService } from "~/services/ProductService";
import { Hero } from "~/components/Hero";


export async function loader() {
  try {
    return await productsService.getAll();
  } catch (error) {
    return [];
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const products: Product[] = loaderData;

  return (
    <>
      <Hero />

      <Box>
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
