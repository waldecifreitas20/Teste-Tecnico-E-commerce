import type { PropsWithChildren } from "react";

export function ProductView({ children }: PropsWithChildren) {
  return (
    <section
      className="
      grid grid-cols-2 
      gap-2 py-5
      
      sm:grid-cols-3 
      lg:grid-cols-4 
      lg:gap-4 
      ">
      {children}
    </section>
  )
}