import { commonRequest } from "../../../../../common/api";

interface Props {
  setShowModal: (val: boolean) => void;
  setData: any;
  selectedRule: any;
}

function GoldCardRuleDeleteModal({
  setShowModal,
  setData,
  selectedRule,
}: Props) {
  const handleDeleteRule = async () => {
    try {
      await commonRequest("DELETE", `/goldCardingRule/${selectedRule.rule_id}`);
      setData((prevData: any[]) =>
        prevData.filter(
          (criteria: any) => criteria.rule_id !== selectedRule.rule_id
        )
      );
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting gold carding criteria:", error);
    }
  };

  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <h3 className="text-lg font-medium text-gray-900">
        Delete Gold Carding Rule
      </h3>
      <p className="text-gray-700 mt-2">
        Are you sure you want to delete this gold carding criteria?
      </p>
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleDeleteRule}
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

export default GoldCardRuleDeleteModal;
