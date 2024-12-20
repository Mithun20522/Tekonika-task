import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function PatientDetailsPreview() {
  const basicDetails = useSelector(
    (state: RootState) => state.patient.basicDetails
  );

  if (!basicDetails) {
    return (
      <div className="text-center text-2xl mt-10 text-blue-600 font-medium">
        Loading...
      </div>
    );
  }

  return (
    basicDetails.firstName && (
      <div className="bg-gray-50 p-4 rounded-lg w-96">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Name:</span>
            <span className="font-medium">
              {basicDetails.firstName} {basicDetails.lastName}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Age:</span>
            <span className="font-medium">{basicDetails.age} years</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Mobile:</span>
            <span className="font-medium">{basicDetails.mobileNo}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Gender:</span>
            <span className="font-medium">{basicDetails.gender}</span>
          </div>
        </div>
      </div>
    )
  );
}
