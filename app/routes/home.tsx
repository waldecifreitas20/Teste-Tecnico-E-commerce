import type { Route } from "./+types/Home";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import type { Product } from "~/types/product";
import { ProductCard } from "~/components/ProductCard";
import { ProductView } from "~/components/ProductView";
import { Box } from "~/components/Box";
import { productsService } from "~/services/ProductService";
import heroMobile from "~/assets/hero-mobile.svg";
import heroDesktop from "~/assets/hero-desk.jpg";
import { Link } from "react-router";


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
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <img
        onClick={() => window.location.reload()}
        className="w-full mb-4"
        src={isDesktop ? heroDesktop : heroMobile}
        alt="Hero"
      />
    
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
