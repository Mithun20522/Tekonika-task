import { Link } from "react-router-dom";

export default function StepDetails() {
  return (
    <div>
      <h1 className="text-center mb-5 text-3xl font-semibold">
        Register a new patient
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <Link
          className="bg-[#848d5e] md:w-fit w-full mx-5 md:mx-0 items-center gap-1 flex text-white cursor-pointer text-sm p-3 rounded-full"
          to={"/patient-register/patient-details"}
        >
          <div className="w-5 text-center h-full rounded-full bg-[#575f4a] text-white text-sm">
            1
          </div>
          <div>Patient Details</div>
        </Link>
        <div className="connector hidden md:block">
          <hr className="border-t-2 border-gray-300 w-10" />
        </div>
        <Link
          className="bg-white md:w-fit w-full mx-5 md:mx-0 items-center gap-1 flex text-[#b4b4b4] border border-[#b4b4b4] cursor-pointer text-sm p-3 rounded-full"
          to={"/patient-register/assign-resources"}
        >
          <div className="w-5 text-center h-full rounded-full bg-[#b4b4b4] text-white text-sm">
            2
          </div>
          <div>Assign Resources</div>
        </Link>
        <div className="connector hidden md:block">
          <hr className="border-t-2 border-gray-300 w-8" />
        </div>
        <Link
          className="bg-white md:w-fit w-full mx-5 md:mx-0 items-center gap-1 flex text-[#b4b4b4] border border-[#b4b4b4] cursor-pointer text-sm p-3 rounded-full"
          to={"/patient-register/doctor-test-report"}
        >
          <div className="w-5 text-center h-full rounded-full bg-[#b4b4b4] text-white text-sm">
            3
          </div>
          <div>Doctor Test Report</div>
        </Link>
      </div>
    </div>
  );
}
