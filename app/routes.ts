import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("/carrinho", "routes/Cart.tsx"),
  route("/produto/:slug", "routes/Product.tsx")
] satisfies RouteConfig;
