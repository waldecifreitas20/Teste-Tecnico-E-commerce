import { useState, type ReactElement } from "react";
import { Link } from "react-router";
import { Logo } from "./Logo";


interface MobileMenuProps {
  options: { label: string, link: string, icon: ReactElement }[]
}


export function MobileMenu(props: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { options } = props;

  return (
    <section role="dialog" aria-modal="true" className="md:hidden">
      <button
        role="button"
        aria-label="menu-toggler"
        className="relative z-10 order-first block size-12"
        onClick={() => setIsOpen(true)}
      >
        <i className="fa-solid fa-bars fa-2xl"></i>
      </button>

      {isOpen && (
        <div
          aria-hidden="true"
          className="bg-black/10 fixed inset-0 z-10"
          onClick={() => setIsOpen(false)}
        >
        </div>
      )}

      <nav>
        <ul
          role="menu"
          aria-label="menu"
          className={` 
            fixed top-0 left-0 z-100 
            bg-white text-slate-800 
            flex flex-col gap-6 p-4
            w-[80%] max-w-75
            h-screen shadow-lg
            transition-all duration-300
            ${!isOpen && "-translate-x-full"}
            `}>
          <li><Logo /></li>

          {options.map(({ label, link, icon }) => (
            <li key={label}>
              <Link
                to={link}
                className="hover:text-blue-400 leading-10 flex items-center gap-4"
                onClick={() => setIsOpen(false)}
              >{icon}{label}</Link>
            </li>
          ))}

        </ul>
      </nav>
    </section >
  );
}