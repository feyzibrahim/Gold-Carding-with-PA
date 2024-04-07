import { useEffect, useState } from "react";
import { commonRequest } from "../../../../common/api";
import Modal from "../../../../components/Modal";
import GoldCardCriteriaCreateForm from "./components/GoldCardCriteriaCreateForm";
import GoldCardCriteriaEditForm from "./components/GoldCardCriteriaEditForm";
import { FiEdit, FiTrash } from "react-icons/fi";
import GoldCardCriteriaDeleteModal from "./components/GoldCardCriteriaDeleteModal";

function GoldCardCriteria() {
  const [data, setData] = useState<any[]>();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCriteria, setSelectedCriteria] = useState<any | null>(null);

  const loadData = async () => {
    const res: any = await commonRequest("GET", "/goldCardingCriteria");
    if (res.success) {
      setData(res.data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEditClick = (criteria: any) => {
    setSelectedCriteria(criteria);
    setShowEditModal(true);
  };

  const handleDeleteClick = (criteria: any) => {
    setSelectedCriteria(criteria);
    setShowDeleteModal(true);
  };

  return (
    <div className="mx-5">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold mb-4">Gold Carding Criteria</h2>
        <div className="mb-4">
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create Gold Carding Criteria
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
                Level
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
                Metric
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Threshold
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Measurement Period (Months)
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
              data.map((criteria, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {criteria.level}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {criteria.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {criteria.metric}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {criteria.threshold}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {criteria.measurement_period_months}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEditClick(criteria)}
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(criteria)}
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
            <GoldCardCriteriaCreateForm
              setShowModal={setShowCreateModal}
              setData={setData}
            />
          }
        />
      )}
      {showEditModal && (
        <Modal
          form={
            <GoldCardCriteriaEditForm
              setShowModal={setShowEditModal}
              setData={setData}
              selectedCriteria={selectedCriteria!}
            />
          }
        />
      )}
      {showDeleteModal && (
        <Modal
          form={
            <GoldCardCriteriaDeleteModal
              setShowModal={setShowDeleteModal}
              setData={setData}
              selectedCriteria={selectedCriteria!}
            />
          }
        />
      )}
    </div>
  );
}

export default GoldCardCriteria;
