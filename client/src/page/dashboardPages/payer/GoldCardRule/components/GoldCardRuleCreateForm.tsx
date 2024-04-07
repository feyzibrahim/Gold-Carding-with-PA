import { Formik } from "formik";
import * as Yup from "yup";
import { commonRequest } from "../../../../../common/api";
import GoldCardForm from "./GoldCardForm";
import { useAppSelector } from "../../../../../redux/hook";

interface Props {
  setShowModal: (val: boolean) => void;
  setData: any;
}

function GoldCardRuleCreateForm({ setShowModal, setData }: Props) {
  const { user } = useAppSelector((state) => state.user);

  const handleCreateRule = async (values: any) => {
    try {
      const res = await commonRequest("POST", "/goldCardingRule", values);
      setData((prevData: any[]) => [res, ...prevData]);
      setShowModal(false);
    } catch (error) {
      console.error("Error creating gold carding criteria:", error);
    }
  };

  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <h3 className="text-lg font-medium text-gray-900">
        Create Gold Carding Rule
      </h3>
      <Formik
        initialValues={{
          description: "",
          metric: "",
          threshold: "",
          measurement_period_months: 0,
          payer_id: user?.payer_id,
        }}
        validationSchema={Yup.object({
          description: Yup.string().required("Description is required"),
          metric: Yup.string().required("Metric is required"),
          threshold: Yup.string().required("Threshold is required"),
          measurement_period_months: Yup.number().required(
            "Measurement Period is required"
          ),
        })}
        onSubmit={handleCreateRule}
      >
        <GoldCardForm setShowModal={setShowModal} />
      </Formik>
    </div>
  );
}

export default GoldCardRuleCreateForm;
