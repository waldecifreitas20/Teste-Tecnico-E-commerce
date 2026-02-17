import { Link } from "react-router";

interface BreadcrumbProps {
  items: { label: string, to: string }[]
}

export function Breadcrumb(props: BreadcrumbProps) {
  const { items } = props;

  return (
    <ul className="flex gap-2 text-sm mb-4">
      {items.map((item, index) => (
        <>
          <li key={index}>
            <Link to={item.to} className="hover:underline hover:text-orange-500">{item.label}</Link>
          </li>
          {index < items.length - 1 && <span>/</span>}
        </>
      ))}
    </ul>
  )
}