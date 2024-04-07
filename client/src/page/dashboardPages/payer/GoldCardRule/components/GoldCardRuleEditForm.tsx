import { Formik } from "formik";
import * as Yup from "yup";
import { commonRequest } from "../../../../../common/api";
import GoldCardForm from "./GoldCardForm";
import { useAppSelector } from "../../../../../redux/hook";

interface Props {
  setShowModal: (val: boolean) => void;
  setData: any;
  selectedRule: any;
}

function GoldCardRuleEditForm({ setShowModal, setData, selectedRule }: Props) {
  const { user } = useAppSelector((state) => state.user);

  const handleEditRule = async (values: any) => {
    try {
      const res = await commonRequest(
        "PUT",
        `/goldCardingRule/${selectedRule.rule_id}`,
        values
      );
      setData((prevData: any[]) =>
        prevData.map((criteria: any) =>
          criteria.rule_id === selectedRule.rule_id ? res : criteria
        )
      );
      setShowModal(false);
    } catch (error) {
      console.error("Error updating gold carding criteria:", error);
    }
  };

  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <h3 className="text-lg font-medium text-gray-900">
        Edit Gold Carding Rule
      </h3>
      <Formik
        initialValues={{
          description: selectedRule.description,
          metric: selectedRule.metric,
          threshold: selectedRule.threshold,
          measurement_period_months: selectedRule.measurement_period_months,
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
        onSubmit={handleEditRule}
      >
        <GoldCardForm setShowModal={setShowModal} />
      </Formik>
    </div>
  );
}

export default GoldCardRuleEditForm;
