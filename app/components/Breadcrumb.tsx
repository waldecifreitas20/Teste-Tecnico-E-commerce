import { Link } from "react-router";

interface BreadcrumbProps {
  items: { label: string, to: string }[]
}

export function Breadcrumb(props: BreadcrumbProps) {
  const { items } = props;


  return (
    <ul className="flex gap-2 text-xs px-4 md:px-0 md:text-sm my-4">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <>
            <li key={index} className={isLast ? "text-slate-700" : "text-slate-500"}>
              {isLast ? (
                item.label
              ) : (
                <>
                  <Link to={item.to} className="hover:underline hover:text-orange-500">{item.label}</Link>
                </>
              )}
            </li>
            {!isLast && <span>/</span>}
          </>
        )
      })}
    </ul>
  )
}