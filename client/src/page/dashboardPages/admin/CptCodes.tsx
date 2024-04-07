import { useEffect, useState } from "react";
import { commonRequest } from "../../../common/api";
import { CptCodeTypes } from "../../../constants/Types";
import { formatDate } from "../../../common/functions";
import Modal from "../../../components/Modal";
import CptCodeCreateForm from "./components/CptCodeCreateForm";
import CptCodeEditForm from "./components/CptCodeEditForm";
import { FiEdit, FiTrash } from "react-icons/fi";
import CptCodeDeleteModal from "./components/CptCodeDeleteModel";

function CptCodes() {
  const [data, setData] = useState<CptCodeTypes[]>();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCptCode, setSelectedCptCode] = useState<CptCodeTypes | null>(
    null
  );

  const loadData = async () => {
    const res = (await commonRequest("GET", "/cptCode")) as CptCodeTypes[];
    setData(res);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEditClick = (cptCode: CptCodeTypes) => {
    setSelectedCptCode(cptCode);
    setShowEditModal(true);
  };

  const handleDeleteClick = (cptCode: CptCodeTypes) => {
    setSelectedCptCode(cptCode);
    setShowDeleteModal(true);
  };

  return (
    <div className="mx-5">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold mb-4">CPT Codes</h2>
        <div className="mb-4">
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create CPT Code
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
                CPT Code
              </th>
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
                Created At
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
              data.map((cptCode) => (
                <tr key={cptCode.cpt_code}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {cptCode.cpt_code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {cptCode.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatDate(cptCode.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEditClick(cptCode)}
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(cptCode)}
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
            <CptCodeCreateForm
              setShowModal={setShowCreateModal}
              setData={setData}
            />
          }
        />
      )}
      {showEditModal && (
        <Modal
          form={
            <CptCodeEditForm
              setShowModal={setShowEditModal}
              setData={setData}
              selectedCptCode={selectedCptCode!}
            />
          }
        />
      )}
      {showDeleteModal && (
        <Modal
          form={
            <CptCodeDeleteModal
              setShowModal={setShowDeleteModal}
              setData={setData}
              selectedCptCode={selectedCptCode!}
            />
          }
        />
      )}
    </div>
  );
}

export default CptCodes;
