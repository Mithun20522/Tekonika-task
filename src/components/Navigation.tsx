import { NavLink } from "react-router-dom";
import { ROUTE_DATA as MENU_DATA } from "../constants/routes.constants";
import { RouteDataTypes } from "../types/route.types";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

export default function Navigation() {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <button
        className="lg:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <IoClose className="size-6" />
        ) : (
          <HiMenu className="size-6" />
        )}
      </button>

      <div
        className={`
        ${isMobileMenuOpen ? "block" : "hidden"}
        lg:block lg:px-32
        absolute lg:relative
        top-full left-0
        w-full
        bg-white
        lg:bg-transparent
        shadow-lg lg:shadow-none
        z-50
      `}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 p-4 lg:p-0">
          <div className="hidden md:block text-xl text-teal-700 font-medium">
            LOGO
          </div>
          {MENU_DATA.map((menu: RouteDataTypes) => (
            <div
              key={menu.id}
              className="relative py-2 lg:py-0"
              onMouseEnter={() => setHoveredMenu(menu.id)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  `text-sm py-2 relative group ${
                    isActive &&
                    "md:underline underline-offset-[25px] font-semibold"
                  }`
                }
              >
                <div className="flex items-center gap-1">
                  <span>{menu.name}</span>
                  {menu.name !== "Patient Register" && menu.subelements && (
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
          ))}
        </div>
      </div>
    </nav>
  );
}
