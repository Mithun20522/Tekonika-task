export default function NextNavigationAction({ onSubmit, text }: any) {
  return (
    <button
      type="button"
      onClick={onSubmit}
      className="bg-[#323e2a] rounded-full text-white px-8 py-2 transition-all duration-200 hover:bg-[#3f4d35] active:bg-[#2a331f]"
    >
      {text}
    </button>
  );
}
