import { useState, type ReactElement } from "react";
import { Link } from "react-router";


interface DrawerProps {
  options: { label: string, link: string, icon: ReactElement }[]
}


export function Drawer(props: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false

  );
  const { options } = props;

  return (
    <>
      <button
        role="button"
        aria-label="menu-toggler"
        className="order-first block size-8"
        onClick={() => setIsOpen(true)}
      >
        <i className="fa-solid fa-bars fa-xl"></i>
      </button>

      {isOpen && (
        <div
          className="bg-black/10 fixed inset-0 z-0"
          onClick={() => setIsOpen(false)}
        >
        </div>
      )}

      <nav>
        <ul
          className={` 
          fixed top-0 left-0 z-100 
          bg-white text-slate-800 
          flex flex-col gap-6 p-4 
          w-[80%] max-w-75
          h-screen shadow-lg
          transition-all duration-300
          ${!isOpen && "-translate-x-full"}
          `}>

          {options.map(({ label, link, icon }) => (
            <Link
              to={link}
              className="hover:text-blue-400 flex items-center gap-4"
              onClick={() => setIsOpen(false)}
            >{icon}{label}</Link>
          ))}

        </ul>
      </nav>
    </>
  );
}