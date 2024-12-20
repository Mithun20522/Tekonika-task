import { useForm } from "react-hook-form";
import FormActionButtons from "./ActionButtons";

export default function LegalDocumentsForm({
  onSubmit,
  onSave,
  activeStep,
}: any) {
  const { handleSubmit } = useForm();

  return (
    <div className="p-7">
      <h1 className="text-xl font-semibold mb-4">Legal Documents</h1>
      <p className="text-gray-600">
        This section is for uploading and managing legal documents related to
        the patient.
      </p>
      <FormActionButtons
        onSave={handleSubmit(onSave)}
        onContinue={handleSubmit(onSubmit)}
        isLastStep={activeStep === 2}
      />
    </div>
  );
}
