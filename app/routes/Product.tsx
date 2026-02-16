import { Box } from "~/components/Box";
import { productsService } from "~/services/ProductService";
import type { Route } from "../+types/root";
import type { Product } from "~/types/product";


export async function loader({ params }: { params: { slug: string } }) {
  return await productsService.getById(params.slug);
}

export default function Product({ loaderData }: Route.ComponentProps) {
  const product = loaderData as any as Product;

  if (!product) {
    return (
      <Box>
        <h1>Produto não encontrado</h1>
      </Box>
    )
  }

  return (
    <Box className="p-0 w-full">
      <section>
        <img src={product.images[0]} alt={product.title} />
      </section>

      <aside className="lg:w-2/3 border border-slate-200 p-4 rounded-md bg-white">
        <p>{product.category.name}</p>
        <h1 className="font-bold text-2xl">{product.title}</h1>
        <p className="old-price">R$ {(product.price * 1.4).toFixed(2)}</p>
        <p className="price">R$ {product.price.toFixed(2)}</p>


          <button className="accent h-fit border border-green-500">Comprar</button>
          <button className=" bg-slate-300 mt-2 h-fit w-full ">Adicionar ao carrinho</button>


      </aside>
    </Box>
  )
}