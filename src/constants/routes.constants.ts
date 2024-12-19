import DemoPage from "../screens/DemoPage";
import { RouteDataTypes } from "../types/route.types";
import { ALL_PAGES_ELEMENT } from "./pages.constants";
import { PAGE_PATHS } from "./url.constants";

export const ROUTE_DATA: RouteDataTypes[] = [
  {
    id: 0,
    name: "Dashboard",
    element: ALL_PAGES_ELEMENT.DASHBOARD,
    path: PAGE_PATHS.DASHBOARD,
  },
  {
    id: 1,
    name: "Patient Register",
    element: ALL_PAGES_ELEMENT.PATIENT_REGISTER,
    path: PAGE_PATHS.PATIENT_REGISTER,
  },
  {
    id: 2,
    name: "Patient Data",
    element: ALL_PAGES_ELEMENT.PATIENT_DATA,
    subelements: [
      {
        name: "demo1",
        path: "/",
      },
      {
        name: "demo2",
        path: "/",
      },
      {
        name: "demo3",
        path: "/",
      },
    ],
    path: PAGE_PATHS.PATIENT_DATA,
  },
  {
    id: 3,
    name: "Operation Theater",
    element: ALL_PAGES_ELEMENT.OPERATION_THEATER,
    subelements: [
      {
        name: "demo1",
        path: "/",
      },
      {
        name: "demo2",
        path: "/",
      },
      {
        name: "demo3",
        path: "/",
      },
    ],
    path: PAGE_PATHS.OPERATION_THEATER,
  },

  {
    id: 4,
    name: "Reports",
    element: ALL_PAGES_ELEMENT.REPORTS,
    subelements: [
      {
        name: "demo1",
        path: "/",
      },
      {
        name: "demo2",
        path: "/",
      },
      {
        name: "demo3",
        path: "/",
      },
    ],
    path: PAGE_PATHS.REPORTS,
  },
  {
    id: 5,
    name: "Demo",
    element: DemoPage,
    path: "/demo",
  },
];
