export type Product = {
  id: number,
  title: string,
  slug: string,
  price: number,
  description: string,
  category: ProductCategory,
  images: string[],
}

export type ProductCategory = {
  id: number,
  name: string,
  image: string,
  slug: string,
}