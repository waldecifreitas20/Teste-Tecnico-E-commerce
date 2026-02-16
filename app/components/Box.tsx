import type { PropsWithChildren } from "react";

export function Box({ children, className }: PropsWithChildren & { className?: string }) {
  return (
    <section
      aria-hidden="true"
      className={`responsible-box ${className}`}>
      {children}
    </section>
  );
}