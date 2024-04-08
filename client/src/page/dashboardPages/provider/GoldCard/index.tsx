import { useEffect, useState } from "react";
import { commonRequest } from "../../../../common/api";
import { ProviderGoldCardingStatusEntity } from "../../../../constants/Types";
import { useAppSelector } from "../../../../redux/hook";
import { formatDate } from "../../../../common/functions";

function GoldCard() {
  const [data, setData] = useState<ProviderGoldCardingStatusEntity[]>();

  const { user } = useAppSelector((state) => state.user);

  const loadData = async () => {
    const res: any = await commonRequest(
      "GET",
      `/providerGoldCardingStatus/provider/${user?.provider_id}`
    );

    if (res.success) {
      console.log("🚀 file: -> file: index.tsx:18 -> loadData -> res", res);
      setData(res.data as ProviderGoldCardingStatusEntity[]);
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
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
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
                Level
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Valid From
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Valid To
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data &&
              data.map((request, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {request?.payer?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {request.gold_carding_level}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatDate(request.valid_from)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatDate(request.valid_until)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GoldCard;
