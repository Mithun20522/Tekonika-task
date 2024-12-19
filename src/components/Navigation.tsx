import { Link } from "react-router-dom";
import { ROUTE_DATA as MENU_DATA } from "../constants/routes.constants";
import { RouteDataTypes } from "../types/route.types";

import { IoIosArrowDown } from "react-icons/io";

export default function Navigation() {
  return (
    <nav className="px-32">
      <div className="flex items-center gap-10">
        {MENU_DATA.map((menu: RouteDataTypes) => (
          <Link key={menu.id} to={menu.path} className="text-sm">
            {menu.name !== "Demo" && (
              <div>
                {menu.subelements ? (
                  <div className="flex items-center gap-1">
                    <span>{menu.name}</span>
                    <IoIosArrowDown />
                  </div>
                ) : (
                  menu.name
                )}
              </div>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
