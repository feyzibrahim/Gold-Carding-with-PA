import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { commonRequest } from "../../../../../common/api";
import { CptCodeTypes } from "../../../../../constants/Types";

interface Props {
  setShowModal: (val: boolean) => void;
  setData: any;
}

function CptCodeCreateForm({ setShowModal, setData }: Props) {
  const handleCreateCptCode = async (values: any) => {
    try {
      const res = (await commonRequest(
        "POST",
        "/cptCode",
        values
      )) as CptCodeTypes;
      setData((prev: CptCodeTypes[]) => [res, ...prev]);
      setShowModal(false);
    } catch (error) {
      console.error("Error creating CPT code:", error);
    }
  };

  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <h3 className="text-lg font-medium text-gray-900">Create CPT Code</h3>
      <Formik
        initialValues={{ cpt_code: "", description: "" }}
        validationSchema={Yup.object({
          cpt_code: Yup.string().required("CPT code is required"),
          description: Yup.string().required("Description is required"),
        })}
        onSubmit={handleCreateCptCode}
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
              placeholder="Enter CPT Code"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
            <ErrorMessage
              name="cpt_code"
              component="div"
              className="text-red-500 text-xs mt-1"
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

export default CptCodeCreateForm;
