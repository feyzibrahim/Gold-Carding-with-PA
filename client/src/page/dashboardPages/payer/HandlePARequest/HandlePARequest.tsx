import { useEffect, useState } from "react";
import { commonRequest } from "../../../../common/api";
import Modal from "../../../../components/Modal";
import HandlePARequestEditForm from "./components/HandlePARequestEditForm";
import { FiEdit } from "react-icons/fi";
import { PriorAuthorizationRequestEntity } from "../../../../constants/Types";
import { useAppSelector } from "../../../../redux/hook";

function HandlePARequest() {
  const [data, setData] = useState<PriorAuthorizationRequestEntity[]>();
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRule, setSelectedRule] =
    useState<PriorAuthorizationRequestEntity | null>(null);

  const { user } = useAppSelector((state) => state.user);

  const loadData = async () => {
    const res: any = await commonRequest(
      "GET",
      `/priorAuthorizationRequest/payer_id/${user?.payer_id}`
    );

    if (res.success) {
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

  return (
    <div className="mx-5">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold mb-4">
          Handle Prior Authorization Request
        </h2>
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
                Provider
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
                    {request?.provider?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {request.cpt_code}
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
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {showEditModal && (
        <Modal
          form={
            <HandlePARequestEditForm
              setShowModal={setShowEditModal}
              loadData={loadData}
              selectedRequest={selectedRule!}
            />
          }
        />
      )}
    </div>
  );
}

export default HandlePARequest;
