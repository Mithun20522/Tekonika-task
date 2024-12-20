import { useForm } from "react-hook-form";
import FormActionButtons from "./ActionButtons";

export default function DemographicsForm({
  onSubmit,
  onSave,
  activeStep,
}: any) {
  const { handleSubmit } = useForm();

  return (
    <div className="p-7">
      <h1 className="text-xl font-semibold mb-4">Demographics Information</h1>
      <p className="text-gray-600">
        This section collects demographic information about the patient.
      </p>
      <FormActionButtons
        onSave={handleSubmit(onSave)}
        onContinue={handleSubmit(onSubmit)}
        isLastStep={activeStep === 2}
      />
    </div>
  );
}
