import { Link } from "react-router";
import { Box } from "~/components/Box";


export function meta() {
  return [
    { title: "404 - Página não encontrada" },
    { name: "description", content: "Página não encontrada" },
  ]
}

export default function NotFound() {
  return (
    <Box className="h-[50vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl">404 <i className="fa-regular fa-face-sad-tear"></i></h1>
      <p className="text-sm mt-1">A página que você está procurando não existe.</p>
      <Link to={"/"} ><button className="accent px-4 mt-5">Página Inicial</button></Link>
    </Box>
  )
}