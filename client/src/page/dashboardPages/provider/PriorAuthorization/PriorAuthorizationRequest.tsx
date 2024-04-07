import { useEffect, useState } from "react";
import { commonRequest } from "../../../../common/api";
import Modal from "../../../../components/Modal";
import PriorAuthorizationRequestCreateForm from "./components/PriorAuthorizationRequestCreateForm";
import PriorAuthorizationRequestEditForm from "./components/PriorAuthorizationRequestEditForm";
import { FiEdit, FiTrash } from "react-icons/fi";
import PriorAuthorizationRequestDeleteModal from "./components/PriorAuthorizationRequestDeleteModel";
import { PriorAuthorizationRequestEntity } from "../../../../constants/Types";
import { useAppSelector } from "../../../../redux/hook";

function PriorAuthorizationRequest() {
  const [data, setData] = useState<PriorAuthorizationRequestEntity[]>();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedRule, setSelectedRule] =
    useState<PriorAuthorizationRequestEntity | null>(null);

  const { user } = useAppSelector((state) => state.user);

  const loadData = async () => {
    const res: any = await commonRequest(
      "GET",
      `/priorAuthorizationRequest/provider_id/${user?.provider_id}`
    );

    if (res.success) {
      console.log(
        "🚀 file: -> file: PriorAuthorizationRequest.tsx:33 -> loadData -> res",
        res
      );
      setData(res.data as PriorAuthorizationRequestEntity[]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEditClick = (request: any) => {
    setSelectedRule(request);
    setShowEditModal(true);
  };

  const handleDeleteClick = (request: any) => {
    setSelectedRule(request);
    setShowDeleteModal(true);
  };

  return (
    <div className="mx-5">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold mb-4">
          Prior Authorization Request
        </h2>
        <div className="mb-4">
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create Prior Authorization Request
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Payer
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                CPT Code
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Metric
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Approval Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Denial Reason
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data &&
              data.map((request) => (
                <tr key={request.request_id}>
                  <td className="px-6 py-4 max-w-72">{request.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {request?.payer?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {request.cpt_code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {request.metric ?? "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {request.approval_status !== null
                      ? request.approval_status
                        ? "Approved"
                        : "Denied"
                      : "Waiting"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {request.denial_reason}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEditClick(request)}
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(request)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FiTrash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {showCreateModal && (
        <Modal
          form={
            <PriorAuthorizationRequestCreateForm
              setShowModal={setShowCreateModal}
              loadData={loadData}
            />
          }
        />
      )}
      {showEditModal && (
        <Modal
          form={
            <PriorAuthorizationRequestEditForm
              setShowModal={setShowEditModal}
              loadData={loadData}
              selectedRequest={selectedRule!}
            />
          }
        />
      )}
      {showDeleteModal && (
        <Modal
          form={
            <PriorAuthorizationRequestDeleteModal
              setShowModal={setShowDeleteModal}
              setData={setData}
              selectedRequest={selectedRule!}
            />
          }
        />
      )}
    </div>
  );
}

export default PriorAuthorizationRequest;
