import { useEffect, useState } from "react";
import { commonRequest } from "../../../../../common/api";
import { GoldCardEvaluationEntity } from "../../../../../constants/Types";
import { useParams } from "react-router-dom";
import { formatDate } from "../../../../../common/functions";

function EvaluationDetails() {
  const { id } = useParams();

  const [data, setData] = useState<GoldCardEvaluationEntity>();

  const loadData = async () => {
    const res: any = await commonRequest("GET", `/goldCardingEvaluation/${id}`);

    if (res.success) {
      setData(res.data as GoldCardEvaluationEntity);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="mx-5">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold mb-4">
          Gold Card Evaluation Result
        </h2>
      </div>
      {data && (
        <div>
          <p className="mb-2">Provider ID: {data.provider?.name}</p>
          <p className="mb-2">Payer ID: {data.payer?.name}</p>
          <p className="mb-2">Gold Carding Level: {data.gold_carding_level}</p>
          <p className="mb-2">Remarks: {data.remarks}</p>
          <p className="mb-2">
            Evaluation Date: {formatDate(data.evaluation_date)}
          </p>
          <div className="mb-4">
            <p className="font-semibold mb-4">Evaluation Criteria:</p>
            <table className="table-auto w-full bg-white">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Criteria</th>
                  <th className="border px-4 py-2">Metric</th>
                  <th className="border px-4 py-2">Value</th>
                  <th className="border px-4 py-2">Meets Criteria</th>
                </tr>
              </thead>
              <tbody>
                {data.evaluation_criteria.map((criterion, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{criterion.criteria}</td>
                    <td className="border px-4 py-2">{criterion.metric}</td>
                    <td className="border px-4 py-2">{criterion.value}</td>
                    <td className="border px-4 py-2">
                      {criterion.meets_criteria ? "Yes" : "No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default EvaluationDetails;
