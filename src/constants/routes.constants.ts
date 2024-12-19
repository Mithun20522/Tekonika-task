import { RouteDataTypes } from "../types/route.types";
import { ALL_PAGES_ELEMENT } from "./pages.constants";
import { PAGE_PATHS } from "./url.constants";

export const ROUTE_DATA: RouteDataTypes[] = [
  {
    id: 0,
    element: ALL_PAGES_ELEMENT.DASHBOARD,
    path: PAGE_PATHS.DASHBOARD,
  },
  {
    id: 1,
    element: ALL_PAGES_ELEMENT.PATIENT_REGISTER,
    path: PAGE_PATHS.PATIENT_REGISTER,
  },
  {
    id: 2,
    element: ALL_PAGES_ELEMENT.PATIENT_DATA,
    path: PAGE_PATHS.PATIENT_DATA,
  },
  {
    id: 3,
    element: ALL_PAGES_ELEMENT.OPERATION_THEATER,
    path: PAGE_PATHS.OPERATION_THEATER,
  },

  {
    id: 4,
    element: ALL_PAGES_ELEMENT.REPORTS,
    path: PAGE_PATHS.REPORTS,
  },
];
