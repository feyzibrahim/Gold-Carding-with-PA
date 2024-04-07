import { Formik } from "formik";
import * as Yup from "yup";
import { commonRequest } from "../../../../../common/api";
import PriorAuthorizationForm from "./PriorAuthorizationForm";
import { useAppSelector } from "../../../../../redux/hook";

interface Props {
  setShowModal: (val: boolean) => void;
  loadData: () => void;
}

function PriorAuthorizationRequestCreateForm({
  setShowModal,
  loadData,
}: Props) {
  const { user } = useAppSelector((state) => state.user);

  const handleCreateRequest = async (values: any) => {
    try {
      await commonRequest("POST", "/priorAuthorizationRequest", values);
      loadData();
      setShowModal(false);
    } catch (error) {
      console.error("Error creating prior authorization request:", error);
    }
  };

  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <h3 className="text-lg font-medium text-gray-900">
        Create Prior Authorization Request
      </h3>
      <Formik
        initialValues={{
          provider_id: user?.provider_id,
          cpt_code: "",
          payer_id: "",
          description: "",
          metric: "",
        }}
        validationSchema={Yup.object({
          provider_id: Yup.string().required("Provider ID is required"),
          cpt_code: Yup.string().required("CPT code is required"),
          payer_id: Yup.string().required("Payer is required"),
          description: Yup.string().required("Description is required"),
          metric: Yup.string().required("Metric is required"),
        })}
        onSubmit={handleCreateRequest}
      >
        <PriorAuthorizationForm setShowModal={setShowModal} />
      </Formik>
    </div>
  );
}

export default PriorAuthorizationRequestCreateForm;
