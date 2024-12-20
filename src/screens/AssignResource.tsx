import { useNavigate } from "react-router-dom";
import NextNavigationAction from "../components/NextNavigationAction";
import toast from "react-hot-toast";
import { PAGE_PATHS } from "../constants/url.constants";

export default function AssignResources() {
  const navigation = useNavigate();
  const onSubmit = () => {
    toast.success("Resource assign done");
    navigation(PAGE_PATHS.DOCTOR_TEST_REPORT);
  };
  return (
    <div className="bg-white rounded-3xl border-2 flex items-center justify-center h-screen gap-10 flex-col">
      <h1>Assign Resources</h1>
      <NextNavigationAction onSubmit={onSubmit} text={"Next"} />
    </div>
  );
}
