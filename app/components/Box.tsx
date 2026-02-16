import type { PropsWithChildren } from "react";

export function Box({ children, className }: PropsWithChildren & { className?: string }) {
  return (
    <section className={`px-4 md:w-[80%] md:max-w-[1000px] mx-auto ${className}`}>
      {children}
    </section>
  );
}