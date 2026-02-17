import type { PropsWithChildren } from "react";

export function FooterSection({ children }: PropsWithChildren) {
  return (
    <section className="flex flex-col gap-4">
      {children}
    </section>
  );
}