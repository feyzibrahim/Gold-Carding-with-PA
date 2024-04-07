import { Formik } from "formik";
import * as Yup from "yup";
import { commonRequest } from "../../../../../common/api";
import PriorAuthorizationForm from "./PriorAuthorizationForm";
// import { useAppSelector } from "../../../../../redux/hook";

interface Props {
  setShowModal: (val: boolean) => void;
  loadData: () => void;
  selectedRequest: any;
}

function PriorAuthorizationRequestEditForm({
  setShowModal,
  loadData,
  selectedRequest,
}: Props) {
  console.log(
    "🚀 file: -> file: PriorAuthorizationRequestEditForm.tsx:18 -> selectedRequest",
    selectedRequest
  );
  // const { user } = useAppSelector((state) => state.user);

  const handleEditRequest = async (values: any) => {
    try {
      await commonRequest(
        "PUT",
        `/priorAuthorizationRequest/${selectedRequest.request_id}`,
        values
      );
      loadData();
      setShowModal(false);
    } catch (error) {
      console.error("Error updating prior authorization request:", error);
    }
  };

  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <h3 className="text-lg font-medium text-gray-900">
        Edit Prior Authorization Request
      </h3>
      <Formik
        initialValues={{
          provider_id: selectedRequest.provider_id,
          cpt_code: selectedRequest.cpt_code,
          payer_id: selectedRequest.payer_id,
          description: selectedRequest.description,
        }}
        validationSchema={Yup.object({
          provider_id: Yup.string().required("Provider ID is required"),
          cpt_code: Yup.string().required("CPT code is required"),
          payer_id: Yup.string().required("Payer is required"),
          description: Yup.string().required("Description is required"),
        })}
        onSubmit={handleEditRequest}
      >
        <PriorAuthorizationForm setShowModal={setShowModal} />
      </Formik>
    </div>
  );
}

export default PriorAuthorizationRequestEditForm;
