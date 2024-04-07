import { useEffect, useState } from "react";
import { Form, Field, ErrorMessage } from "formik";
import { commonRequest } from "../../../../../common/api";

interface Props {
  setShowModal: (val: boolean) => void;
}

function PriorAuthorizationForm({ setShowModal }: Props) {
  const [payers, setPayers] = useState<any[]>([]);
  const [cptCodes, setCptCodes] = useState<any[]>([]);

  useEffect(() => {
    const fetchPayers = async () => {
      try {
        const res: any = await commonRequest("GET", "/payer");

        setPayers(res);
      } catch (error) {
        console.error("Error fetching payers:", error);
      }
    };

    const fetchCptCodes = async () => {
      try {
        const res: any = await commonRequest("GET", "/cptCode");

        setCptCodes(res);
      } catch (error) {
        console.error("Error fetching CPT codes:", error);
      }
    };

    fetchPayers();
    fetchCptCodes();
  }, []);

  return (
    <Form>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <Field
          type="textarea"
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
          htmlFor="cpt_code"
          className="block text-sm font-medium text-gray-700"
        >
          CPT Code
        </label>
        <Field
          as="select"
          id="cpt_code"
          name="cpt_code"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        >
          <option value="">Select CPT Code</option>
          {cptCodes.map((cptCode, index) => (
            <option key={index} value={cptCode?.cpt_code}>
              {cptCode?.cpt_code} | {cptCode?.description}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name="cpt_code"
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
          type="textarea"
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
          htmlFor="payer_id"
          className="block text-sm font-medium text-gray-700"
        >
          Payer ID
        </label>
        <Field
          as="select"
          id="payer_id"
          name="payer_id"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        >
          <option value="">Select Payer</option>
          {payers.map((payer, index) => (
            <option key={index} value={payer.payer_id}>
              {payer.name}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name="payer_id"
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

export default PriorAuthorizationForm;
