import { Box } from "~/components/Box";
import { productsService } from "~/services/ProductService";
import type { Route } from "../+types/root";
import type { Product } from "~/types/product";
import { Link } from "react-router";


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
      <Link
        to="../"
        className="
        py-2 px-4 m-2 
        inline-block rounded-full
        text-xs w-fit text-slate-700 bg-white border-slate-200 border
        ">
        <i className="fa-solid fa-arrow-left mr-1"></i>
        Página Inicial
      </Link>
      <section>
        <img src={product.images[0]} alt={product.title} />
      </section>

      <aside className="lg:w-2/3 border border-slate-200 p-4 rounded-md bg-white">
        <section className="pb-28">
          <p className="text-slate-400 uppercase text-sm">{product.category.name}</p>
          <h1 className="font-bold text-2xl">{product.title}</h1>
          <p className="old-price">R$ {(product.price * 1.4).toFixed(2)}</p>
          <p className="price">R$ {product.price.toFixed(2)}</p>

          <div className="flex gap-2 items-center ">
            <label htmlFor="quantity">Quantidade:</label>
            <input
              type="number"
              min={1}
              max={100}
              defaultValue={1}
              className="w-16 px-4 py-2 rounded-md border border-slate-200" />
          </div>

          <p
            className="
            text-slate-500 text-sm 
            mt-6 py-4 
            border-t border-slate-200"
          >
            {product.description}
          </p>
        </section>
        {/* fixed bottom on mobile */}
        <section
          className="
          fixed bottom-0 left-0 right-0 
          block py-4 px-4
          bg-white 
          border-t border-slate-200">
          <button className="accent h-fit border border-green-500">Comprar $ </button>
          <button className=" bg-slate-300 mt-2 h-fit w-full ">
            Adicionar ao carrinho
            <i className="fa-solid fa-cart-plus ml-2"></i>
          </button>
        </section>

      </aside>
    </Box>
  )
}