import { commonRequest } from "../../../../../common/api";

interface Props {
  setShowModal: (val: boolean) => void;
  setData: any;
  selectedRequest: any;
}

function PriorAuthorizationRequestDeleteModel({
  setShowModal,
  setData,
  selectedRequest,
}: Props) {
  const handleDeleteRequest = async () => {
    try {
      await commonRequest(
        "DELETE",
        `/priorAuthorizationRequest/${selectedRequest.request_id}`
      );
      setData((prevData: any[]) =>
        prevData.filter(
          (request: any) => request.request_id !== selectedRequest.request_id
        )
      );
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting prior authorization request:", error);
    }
  };

  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <h3 className="text-lg font-medium text-gray-900">
        Delete Prior Authorization Request
      </h3>
      <p className="text-gray-700 mt-2">
        Are you sure you want to delete this prior authorization request?
      </p>
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleDeleteRequest}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete
        </button>
        <button
          onClick={() => setShowModal(false)}
          className="ml-2 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default PriorAuthorizationRequestDeleteModel;
