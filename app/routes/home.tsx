import axios from "axios";
import type { Route } from "./+types/Home";

export async function loader({ params }: Route.LoaderArgs) {
  try {

    const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=10`)
    return data;

  } catch (error) {
    return [];
  }
}

export default function Home({
  loaderData
}: Route.ComponentProps) {


  return (
    <main className="responsible">
      <h1>SHOPTRIX</h1>
    </main>
  );
}

export function HydrateFallback() {
  return <div>Carregando produtos...</div>;
}
