import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { commonRequest } from "../../../../common/api";
import { CptCodeTypes } from "../../../../constants/Types";

interface Props {
  setShowModal: (val: boolean) => void;
  setData: any;
  selectedCptCode: CptCodeTypes;
}

function CptCodeEditForm({ setShowModal, setData, selectedCptCode }: Props) {
  const handleEditCptCode = async (values: any) => {
    try {
      const res = (await commonRequest(
        "PUT",
        `/cptCode/${selectedCptCode.cpt_code}`,
        values
      )) as CptCodeTypes;

      setData((prev: CptCodeTypes[]) =>
        prev.map((cptCode) =>
          cptCode.cpt_code === res.cpt_code ? res : cptCode
        )
      );
      setShowModal(false);
    } catch (error) {
      console.error("Error updating CPT code:", error);
    }
  };

  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <h3 className="text-lg font-medium text-gray-900">Edit CPT Code</h3>
      <Formik
        initialValues={{
          cpt_code: selectedCptCode.cpt_code,
          description: selectedCptCode.description,
        }}
        validationSchema={Yup.object({
          description: Yup.string().required("Description is required"),
        })}
        onSubmit={handleEditCptCode}
      >
        <Form className="mt-5">
          <div className="mb-4">
            <label
              htmlFor="cpt_code"
              className="block text-sm font-medium text-gray-700"
            >
              CPT Code
            </label>
            <Field
              type="text"
              id="cpt_code"
              name="cpt_code"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <Field
              type="text"
              id="description"
              name="description"
              placeholder="Enter Description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
            <ErrorMessage
              name="description"
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

export default CptCodeEditForm;
