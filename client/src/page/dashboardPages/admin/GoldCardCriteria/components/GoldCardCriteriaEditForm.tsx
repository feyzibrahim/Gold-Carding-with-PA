import { Formik } from "formik";
import * as Yup from "yup";
import { commonRequest } from "../../../../../common/api";
import GoldCardForm from "./GoldCardForm";

interface Props {
  setShowModal: (val: boolean) => void;
  setData: any;
  selectedCriteria: any;
}

function GoldCardingCriteriaEditForm({
  setShowModal,
  setData,
  selectedCriteria,
}: Props) {
  const handleEditCriteria = async (values: any) => {
    try {
      const res: any = await commonRequest(
        "PUT",
        `/goldCardingCriteria/${selectedCriteria.criteria_id}`,
        values
      );

      if (res.success) {
        setData((prevData: any[]) =>
          prevData.map((criteria: any) =>
            criteria.criteria_id === selectedCriteria.criteria_id
              ? res.data
              : criteria
          )
        );
      }
      setShowModal(false);
    } catch (error) {
      console.error("Error updating gold carding criteria:", error);
    }
  };

  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <h3 className="text-lg font-medium text-gray-900">
        Edit Gold Carding Criteria
      </h3>
      <Formik
        initialValues={{
          description: selectedCriteria.description,
          metric: selectedCriteria.metric,
          threshold: selectedCriteria.threshold,
          measurement_period_months: selectedCriteria.measurement_period_months,
          criteria_id: selectedCriteria.criteria_id,
          level: selectedCriteria.level,
        }}
        validationSchema={Yup.object({
          description: Yup.string().required("Description is required"),
          metric: Yup.string().required("Metric is required"),
          threshold: Yup.string().required("Threshold is required"),
          criteria_id: Yup.string().required("Criteria is required"),
          level: Yup.string().required("Level is required"),
          measurement_period_months: Yup.number().required(
            "Measurement Period is required"
          ),
        })}
        onSubmit={handleEditCriteria}
      >
        <GoldCardForm setShowModal={setShowModal} />
      </Formik>
    </div>
  );
}

export default GoldCardingCriteriaEditForm;
