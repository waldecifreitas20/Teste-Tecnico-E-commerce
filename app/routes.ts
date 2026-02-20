import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/carrinho", "routes/cart.tsx"),
  route("/produto/:slug", "routes/product.tsx"),
  route("*", "routes/not-found.tsx")
] satisfies RouteConfig;
