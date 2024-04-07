import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { commonRequest } from "../../../../../common/api";

interface Props {
  setShowModal: (val: boolean) => void;
  loadData: () => void;
  selectedRequest: any;
}

function HandlePARequestEditForm({
  setShowModal,
  loadData,
  selectedRequest,
}: Props) {
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
        Update Authorization Request
      </h3>
      <Formik
        initialValues={{
          approval_status: selectedRequest?.approval_status || "true",
          denial_reason: selectedRequest.denial_reason || "",
        }}
        validationSchema={Yup.object({
          approval_status: Yup.boolean().required(
            "Approval Status is required"
          ),
          denial_reason: Yup.string().optional(),
        })}
        onSubmit={handleEditRequest}
      >
        <Form>
          <div className="mb-4">
            <label
              htmlFor="approval_status"
              className="block text-sm font-medium text-gray-700"
            >
              Approval Status
            </label>
            <Field
              as="select"
              id="approval_status"
              name="approval_status"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            >
              <option value="true">Approved</option>
              <option value="false">Denied</option>
            </Field>
            <ErrorMessage
              name="approval_status"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="denial_reason"
              className="block text-sm font-medium text-gray-700"
            >
              Denial Reason
            </label>
            <Field
              type="text"
              id="denial_reason"
              name="denial_reason"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
            <ErrorMessage
              name="denial_reason"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="ml-2 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default HandlePARequestEditForm;
