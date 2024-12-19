import PatientForm from "../components/PatientForm";
import StepDetails from "../components/StepDetails";

export default function PatientRegister() {
  return (
    <div className="w-full p-7 space-y-10">
      <StepDetails />
      <PatientForm />
    </div>
  );
}
