import { useEffect, useState } from "react";
import { commonRequest } from "../../../../common/api";
import { GoldCardEvaluationEntity } from "../../../../constants/Types";
import { useNavigate } from "react-router-dom";

function EvaluationResult() {
  const navigate = useNavigate();
  const [data, setData] = useState<GoldCardEvaluationEntity[]>();

  const loadData = async () => {
    const res: any = await commonRequest("GET", `/goldCardingEvaluation`);

    if (res.success) {
      setData(res.data as GoldCardEvaluationEntity[]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const gotoNextPage = (loc: string) => {
    navigate(loc);
  };

  return (
    <div className="mx-5">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold mb-4">
          Gold Card Evaluation Result
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Remarks
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Payer
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Provider
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Level
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data &&
              data.map((request, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 cursor-pointer active:bg-gray-200"
                  onClick={() => gotoNextPage(request.evaluation_id as string)}
                >
                  <td className="px-6 py-4 max-w-72">{request.remarks}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {request?.payer?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {request?.provider?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {request.gold_carding_level}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EvaluationResult;
