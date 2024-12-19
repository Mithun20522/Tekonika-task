import { NavLink } from "react-router-dom";
import { ROUTE_DATA as MENU_DATA } from "../constants/routes.constants";
import { RouteDataTypes } from "../types/route.types";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Dropdown } from "./Dropdown";

export default function Navigation() {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  return (
    <nav className="px-32">
      <div className="flex items-center gap-10">
        {MENU_DATA.map(
          (menu: RouteDataTypes) =>
            menu.name !== "Demo" && (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => setHoveredMenu(menu.id)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `text-sm py-2 relative group ${
                      isActive && "underline underline-offset-[25px]"
                    }`
                  }
                >
                  <div className="flex items-center gap-1">
                    <span>{menu.name}</span>
                    {menu.subelements && (
                      <IoIosArrowDown
                        className={`transform transition-transform duration-200 ${
                          hoveredMenu === menu.id ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                </NavLink>
                {menu.subelements && (
                  <div>
                    <Dropdown
                      subelements={menu.subelements}
                      isVisible={hoveredMenu === menu.id}
                    />
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </nav>
  );
}
