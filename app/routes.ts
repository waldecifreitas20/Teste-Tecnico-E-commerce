import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/carrinho", "routes/Cart.tsx")
] satisfies RouteConfig;
