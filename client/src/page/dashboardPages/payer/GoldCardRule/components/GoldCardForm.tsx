import { ErrorMessage, Field, Form } from "formik";

interface Props {
  setShowModal: any;
}

function GoldCardForm({ setShowModal }: Props) {
  return (
    <Form className="mt-5">
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        />
        <ErrorMessage
          name="description"
          component="div"
          className="text-red-500 text-xs mt-1"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="metric"
          className="block text-sm font-medium text-gray-700"
        >
          Metric
        </label>
        <Field
          type="text"
          id="metric"
          name="metric"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        />
        <ErrorMessage
          name="metric"
          component="div"
          className="text-red-500 text-xs mt-1"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="threshold"
          className="block text-sm font-medium text-gray-700"
        >
          Threshold
        </label>
        <Field
          type="text"
          id="threshold"
          name="threshold"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        />
        <ErrorMessage
          name="threshold"
          component="div"
          className="text-red-500 text-xs mt-1"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="measurement_period_months"
          className="block text-sm font-medium text-gray-700"
        >
          Measurement Period (Months)
        </label>
        <Field
          type="number"
          id="measurement_period_months"
          name="measurement_period_months"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        />
        <ErrorMessage
          name="measurement_period_months"
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
  );
}

export default GoldCardForm;
