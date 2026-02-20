import type { PropsWithChildren } from "react";

export function Box({ children, className }: PropsWithChildren & { className?: string }) {
  return (
    <section
      className={`border-2 border-red-500 responsible-box ${className}`}>
      {children}
    </section>
  );
}