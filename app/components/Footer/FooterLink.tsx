import { Link } from "react-router";
import type { PropsWithChildren } from "react";

export function FooterLink({ link, children }: PropsWithChildren<{ link: string }>) {
  return (
    <Link to={link} className="hover:text-orange-500 transition-colors">
      {children}
    </Link>

  )
}