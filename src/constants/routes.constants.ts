import { RouteDataTypes } from "../types/route.types";
import { generateSubElements } from "../utils/route.utils";
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
    subelements: [
      {
        name: "Patient Details",
        path: "/patient-register/patient-details",
      },
      {
        name: "Assign Resources",
        path: "/patient-register/assign-resources",
      },
      {
        name: "Doctor Test Report",
        path: "/patient-register/doctor-test-report",
      },
    ],
    path: PAGE_PATHS.PATIENT_REGISTER,
  },
  {
    id: 2,
    name: "Patient Data",
    element: ALL_PAGES_ELEMENT.PATIENT_DATA,
    subelements: generateSubElements("Patient Data", PAGE_PATHS.PATIENT_DATA),
    path: PAGE_PATHS.PATIENT_DATA,
  },
  {
    id: 3,
    name: "Operation Theater",
    element: ALL_PAGES_ELEMENT.OPERATION_THEATER,
    subelements: generateSubElements(
      "Operation Theater",
      PAGE_PATHS.OPERATION_THEATER
    ),
    path: PAGE_PATHS.OPERATION_THEATER,
  },
  {
    id: 4,
    name: "Reports",
    element: ALL_PAGES_ELEMENT.REPORTS,
    subelements: generateSubElements("Reports", PAGE_PATHS.REPORTS),
    path: PAGE_PATHS.REPORTS,
  },
];
