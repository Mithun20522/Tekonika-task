import { useState } from "react";
import toast from "react-hot-toast";
import BasicDetailsForm from "./BasicDetailsForm";
import LegalDocumentsForm from "./LegalDocumentsForm";
import DemographicsForm from "./DemographicsForm";

const subOptions = ["Basic Details", "Legal Documents", "Demographics"];

export default function PatientForm() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleSubmit = (data: any) => {
    console.log(data);
    toast.success(`Step ${activeStep + 1} completed`);
    if (activeStep < subOptions.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <BasicDetailsForm onSubmit={handleSubmit} />;
      case 1:
        return <LegalDocumentsForm onSubmit={handleSubmit} />;
      case 2:
        return <DemographicsForm onSubmit={handleSubmit} />;
      default:
        return <BasicDetailsForm onSubmit={handleSubmit} />;
    }
  };

  return (
    <div className="p-7 border-2 rounded-3xl bg-white mx-auto">
      <div className="flex items-center justify-center gap-5 text-sm">
        {subOptions.map((step, index) => (
          <div
            key={step}
            className={`${
              activeStep === index
                ? "border-b-2 border-blue-600 text-blue-600"
                : ""
            } cursor-pointer pb-2`}
            onClick={() => setActiveStep(index)}
          >
            {step}
          </div>
        ))}
      </div>
      {renderStepContent()}
    </div>
  );
}
