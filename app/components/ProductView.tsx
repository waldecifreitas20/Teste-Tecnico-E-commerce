import type { PropsWithChildren } from "react";

export function ProductView({ children }: PropsWithChildren) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {children}
    </section>
  )
}