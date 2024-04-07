import { commonRequest } from "../../../../../common/api";
import { CptCodeTypes } from "../../../../../constants/Types";

interface Props {
  setShowModal: (val: boolean) => void;
  setData: any;
  selectedCptCode: CptCodeTypes;
}

function CptCodeDeleteModal({ setShowModal, setData, selectedCptCode }: Props) {
  const handleDeleteCptCode = async () => {
    try {
      await commonRequest("DELETE", `/cptCode/${selectedCptCode.cpt_code}`);
      setData((prev: CptCodeTypes[]) =>
        prev.filter((cptCode) => cptCode.cpt_code !== selectedCptCode.cpt_code)
      );
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting CPT code:", error);
    }
  };

  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <h3 className="text-lg font-medium text-gray-900">Delete CPT Code</h3>
      <p className="text-gray-700 mt-2">
        Are you sure you want to delete CPT code "{selectedCptCode.cpt_code}"?
      </p>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleDeleteCptCode}
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

export default CptCodeDeleteModal;
