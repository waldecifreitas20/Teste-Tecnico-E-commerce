import { Box } from "~/components/Box";
import { productsService } from "~/services/ProductService";
import type { Route } from "../+types/root";
import type { Product } from "~/types/product";
import { Link } from "react-router";
import { QuantityInput } from "~/components/QuantityInput";
import { ProductImages } from "~/components/ProductImages";
import { CartContext } from "~/provider/CartProvider";
import { useContext, useRef } from "react";
import { ProductCard } from "~/components/ProductCard";
import { ProductView } from "~/components/ProductView";


interface ProductLoaderData {
  product: Product;
  relatedProducts: Product[];
}

export async function loader({ params }: { params: { slug: string } }) {
  const product = await productsService.getById(params.slug);
  const relatedProducts = await productsService.getRelatedProducts(params.slug);

  return { product, relatedProducts };
}

export default function Product({ loaderData }: Route.ComponentProps) {
  const { product, relatedProducts } = loaderData as any as ProductLoaderData;
  const qtdRef = useRef(1);
  const cart = useContext(CartContext);

  if (!product) {
    return (
      <Box>
        <h1>Produto não encontrado</h1>
      </Box>
    )
  }

  return (
    <Box className="p-0 w-full md:py-4">
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

      <div className="md:flex md:gap-10 justify-between">
        <section className="md:w-1/2">
          <ProductImages images={product.images} />
        </section>

        <aside className="md:w-sm border border-slate-200 p-4 rounded-md bg-white">

          <section>
            <p className="text-slate-400 uppercase text-sm">{product.category.name}</p>
            <h1 className="font-bold text-2xl">{product.title}</h1>
            <p className="old-price">R$ {(product.price * 1.4).toFixed(2)}</p>
            <p className="price">R$ {product.price.toFixed(2)}</p>

            <QuantityInput initialValue={1} onChangeValue={(qtd) => qtdRef.current = qtd} />

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
            sticky bottom-0 left-0 right-0 z-10 
            block py-4 px-4
            bg-white 
            border-t border-slate-200

            md:static
            
            md:p-0 md:m-0
            md:border-none
          ">

            <Link
              to={"/carrinho"}
              className="block w-full"
              onClick={() => cart.addItem(product, qtdRef.current)}
            ><button
              className="accent block h-fit border border-green-500 w-full md:py-3">
                Comprar $
              </button>
            </Link>

            <button
              onClick={() => cart.addItem(product, qtdRef.current)}
              className=" bg-slate-300 md:py-3 hover:bg-slate-400 mt-2 h-fit w-full  ">
              Adicionar ao carrinho
              <i className="fa-solid fa-cart-plus ml-2 md:m-0"></i>
            </button>
          </section>

        </aside>

      </div>

      <section className="px-4">
        <h2 className="font-bold text-2xl mt-6 mb-2">Produtos Relacionados</h2>
        <ProductView>
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductView>
      </section>
    </Box>
  )
}