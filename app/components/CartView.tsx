import type { PropsWithChildren } from "react";
import { Link } from "react-router";

export function CartView({ children }: PropsWithChildren) {

  if (!children || (children as []).length === 0) {
    return (
      <div className="flex flex-col gap-4 h-[500px] justify-center items-center">
        <p className="text-lg text-slate-400">Seu carrinho está vazio</p>
        <Link to={"/"}>
          <button className="bg-slate-800 text-slate-100 px-6 py-2">
            Voltar às compras
          </button>
        </Link>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-4">
      {children}
    </ul>
  );
}