import { Box } from "~/components/Box";
import { useLoaderData } from "react-router";


export async function loader({ params }: { params: { slug: string } }) {
  const product = await fetch(`https://api.mercadolibre.com/items/${params.slug}`).then(res => res.json());
  return { product };
}

export default function Product() {
  const { product } = useLoaderData();
  return (
    <Box>
      <h1>{product.title}</h1>
    </Box>
  )
}