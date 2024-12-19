import { NavLink } from "react-router-dom";

type DropdownProps = {
  subelements: { name: string; path: string }[];
  isVisible: boolean;
};

export function Dropdown({ subelements, isVisible }: DropdownProps) {
  if (!isVisible) return null;

  return (
    <div className="lg:absolute lg:top-full lg:left-0 mt-1 bg-white lg:shadow-lg lg:rounded-md py-2 min-w-[200px] z-50">
      {subelements.map((subItem, index) => (
        <NavLink
          key={index}
          to={subItem.path}
          className={({ isActive }) =>
            `block px-4 py-2 text-sm hover:bg-gray-50 ${
              isActive && "bg-blue-50"
            }`
          }
        >
          {subItem.name}
        </NavLink>
      ))}
    </div>
  );
}
