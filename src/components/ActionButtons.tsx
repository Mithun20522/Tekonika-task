import { useNavigate } from "react-router-dom";

type FormActionButtonsProps = {
  onSave: () => void;
  onContinue: () => void;
  isLastStep: boolean;
  to?: string;
};

export default function FormActionButtons({
  onSave,
  onContinue,
  isLastStep,
  to,
}: FormActionButtonsProps) {
  const navigate = useNavigate();

  const handleOnContinue = () => {
    if (to) {
      navigate(to);
    }
    onContinue();
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-5 md:gap-10 gap-6">
      <button
        type="button"
        onClick={onSave}
        className="border-[#646e5e] border-2 cursor-pointer rounded-full px-8 py-2 transition-all duration-200 hover:bg-gray-50 active:bg-gray-100"
      >
        Save
      </button>
      <button
        type="submit"
        onClick={handleOnContinue}
        className="bg-[#323e2a] rounded-full text-white px-8 py-2 transition-all duration-200 hover:bg-[#3f4d35] active:bg-[#2a331f]"
      >
        {isLastStep ? "Submit" : "Save & Continue"}
      </button>
    </div>
  );
}
