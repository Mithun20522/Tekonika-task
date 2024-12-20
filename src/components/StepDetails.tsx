import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PAGE_PATHS } from "../constants/url.constants";
const steps = [
  {
    number: 1,
    path: PAGE_PATHS.PATIENT_DETAILS,
    label: "Patient Details",
  },
  {
    number: 2,
    path: PAGE_PATHS.ASSIGN_RESOURCES,
    label: "Assign Resources",
  },
  {
    number: 3,
    path: PAGE_PATHS.DOCTOR_TEST_REPORT,
    label: "Doctor Test Report",
  },
];

export default function StepDetails() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isStepActive = (stepPath: string) => currentPath === stepPath;

  return (
    <div>
      <h1 className="text-center mb-5 text-3xl font-semibold">
        Register a new patient
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <Link
              className={`${
                isStepActive(step.path)
                  ? "bg-[#848d5e] text-white"
                  : "bg-white text-[#b4b4b4] border border-[#b4b4b4]"
              } md:w-fit w-full mx-5 md:mx-0 items-center gap-1 flex cursor-pointer text-sm p-3 rounded-full`}
              to={step.path}
            >
              <div
                className={`w-5 text-center h-full rounded-full ${
                  isStepActive(step.path) ? "bg-[#575f4a]" : "bg-[#b4b4b4]"
                } text-white text-sm`}
              >
                {step.number}
              </div>
              <div>{step.label}</div>
            </Link>
            {index < steps.length - 1 && (
              <div className="connector hidden md:block">
                <hr className="border-t-2 border-gray-300 w-10" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
