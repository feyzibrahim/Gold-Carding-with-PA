import cron from "node-cron";
import { PriorAuthorizationRequest, Provider } from "../database/models";

const getRandomNumber = (min: number, max: number): number => {
  const randomDecimal = Math.random() * (max - min) + min;
  return Number(randomDecimal.toFixed(2));
};

export const updateProviderData = async (): Promise<void> => {
  try {
    const data = await Provider.findAll();
    const providers = data.map((ele) => ele.toJSON());

    for (const provider of providers) {
      const authData = await PriorAuthorizationRequest.findAll({
        where: { provider_id: provider.provider_id },
      });

      const authorizationRequests = authData.map((ele) => ele.toJSON());

      const totalRequests = authorizationRequests.length;
      const approvedRequests = authorizationRequests.filter(
        (request) => request.approval_status === true
      ).length;
      const approval_rate =
        totalRequests > 0
          ? Number((approvedRequests / totalRequests).toFixed(2))
          : 0;

      const submission_volume = totalRequests;

      // Readmission data is not collected now so a random value is given
      const readmission_rate = getRandomNumber(0, 0.1);

      // treatment_guideline_adherence is not collected now so a random value is given
      const treatment_guideline_adherence = getRandomNumber(0.8, 1);

      await Provider.update(
        {
          approval_rate,
          submission_volume,
          readmission_rate,
          treatment_guideline_adherence,
        },
        {
          where: { provider_id: provider.provider_id },
        }
      );

      console.log(`Updated data for provider with ID ${provider.provider_id}`);
    }
  } catch (error) {
    console.error("Error updating provider data:", error);
  }
};

export const startProviderDataUpdateCronJob = (): void => {
  cron.schedule("*/10 * * * *", () => {
    console.log("⌚⌚⌚ Running provider data update cron job...");
    updateProviderData();
  });
};
