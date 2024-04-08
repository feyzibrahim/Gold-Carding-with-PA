import cron from "node-cron";
import { Provider, Payer, GoldCardEvaluation } from "../database/models";
import {
  GoldCardingCriteriaService,
  GoldCardingRuleService,
  ProviderGoldCardingStatusService,
} from "../services";

const determineGoldCardLevel = async (
  evaluationCriteria: {
    criteria: string;
    metric: string;
    value: number;
    meets_criteria: boolean;
  }[]
): Promise<string> => {
  // Define the criteria for the basic level
  const goldCardingCriteriaService = new GoldCardingCriteriaService();

  const premierLevelCriteriaData = await goldCardingCriteriaService.findByLevel(
    "Premier"
  );
  const premierLevelCriteria = premierLevelCriteriaData.map((ele) =>
    ele.toJSON()
  );

  // Check if evaluationCriteria meet the criteria for the premier level
  const meetsPremierCriteria = premierLevelCriteria.every((criteria) => {
    const criterion = evaluationCriteria.find(
      (c) => c.metric === criteria.metric
    );
    return criterion && criterion.value >= parseFloat(criteria.threshold);
  });

  if (meetsPremierCriteria) {
    return "Premier";
  }

  const advancedLevelCriteriaData =
    await goldCardingCriteriaService.findByLevel("Advanced");
  const advancedLevelCriteria = advancedLevelCriteriaData.map((ele) =>
    ele.toJSON()
  );

  // Check if evaluationCriteria meet the criteria for the advanced level
  const meetsAdvancedCriteria = advancedLevelCriteria.every((criteria) => {
    const criterion = evaluationCriteria.find(
      (c) => c.metric === criteria.metric
    );
    return criterion && criterion.value >= parseFloat(criteria.threshold);
  });

  if (meetsAdvancedCriteria) {
    return "Advanced";
  }

  const basicLevelCriteriaData = await goldCardingCriteriaService.findByLevel(
    "Basic"
  );
  const basicLevelCriteria = basicLevelCriteriaData.map((ele) => ele.toJSON());

  // Check if evaluationCriteria meet the criteria for the basic level
  const meetsBasicCriteria = basicLevelCriteria.every((criteria) => {
    const criterion = evaluationCriteria.find(
      (c) => c.metric === criteria.metric
    );
    return criterion && criterion.value >= parseFloat(criteria.threshold);
  });

  if (meetsBasicCriteria) {
    return "Basic";
  }

  return "None";
};

// Function to generate GoldCardEvaluation for each provider and payer
const generateGoldCardEvaluation = async (): Promise<void> => {
  const goldCardingRuleService = new GoldCardingRuleService();
  const providerGoldCardingStatusService =
    new ProviderGoldCardingStatusService();

  try {
    // Fetch all providers and payers
    const providerData = await Provider.findAll();
    const providers = providerData.map((ele) => ele.toJSON());
    const payerData = await Payer.findAll();
    const payers = payerData.map((ele) => ele.toJSON());

    // Iterate through each provider and payer combination
    for (const provider of providers) {
      for (const payer of payers) {
        const payerEvaluationData = await goldCardingRuleService.findByPayer(
          payer?.payer_id as string
        );

        const payerEvaluation = payerEvaluationData.map((ele) => ele.toJSON());
        if (payerEvaluation.length < 1) {
          continue;
        }
        const evaluationCriteria: {
          criteria: string;
          metric: string;
          value: number;
          meets_criteria: boolean;
        }[] = [];

        for (const rule of payerEvaluation) {
          const temp = rule.metric;
          const providerAny = provider as any;
          let criteriaEval = providerAny[temp];
          if (criteriaEval) {
            evaluationCriteria.push({
              criteria: rule.description,
              metric: rule.metric,
              value: criteriaEval,
              meets_criteria: criteriaEval >= parseFloat(rule.threshold),
            });
          }
        }

        let count = 0;
        evaluationCriteria.map((val) => {
          if (val.meets_criteria) {
            count++;
          }
        });

        // If the evolution didn't get the 4 criteria don't want to create a gold card
        if (count < 4) {
          continue;
        }

        const goldLevel = await determineGoldCardLevel(evaluationCriteria);

        if (goldLevel === "None") {
          continue;
        }

        const providerGoldCardStatus =
          await providerGoldCardingStatusService.findByProviderAndPayer(
            provider.provider_id as string,
            payer.payer_id as string
          );

        if (!providerGoldCardStatus) {
          const validUntil = new Date();
          validUntil.setMonth(validUntil.getMonth() + 1);

          await providerGoldCardingStatusService.create({
            criteria_met: true,
            gold_carding_level: goldLevel,
            provider_id: provider.provider_id as string,
            payer_id: payer.payer_id as string,
            valid_from: new Date(),
            valid_until: validUntil,
          });

          // Create GoldCardEvaluation record
          await GoldCardEvaluation.create({
            provider_id: provider.provider_id as string,
            payer_id: payer.payer_id as string,
            evaluation_criteria: evaluationCriteria,
            gold_carding_level: goldLevel,
            remarks: "Sample remarks",
            evaluation_date: new Date(),
          });
        }

        console.log(
          `Created GoldCardEvaluation for Provider ID ${provider.provider_id} and Payer ID ${payer.payer_id}`
        );
      }
    }
  } catch (error) {
    console.error("Error generating GoldCardEvaluation:", error);
  }
};

// Cron job to run every day at midnight
const generateGoldCardEvaluationCronJob = (
  interval: string = "0 0 1 */1 *"
  // interval: string = "*/5 * * * * *"
): void => {
  cron.schedule(interval, () => {
    console.log(
      `⌚⌚⌚ ${interval} Running generateGoldCardEvaluation cron job...`
    );
    generateGoldCardEvaluation();
  });
};

export default generateGoldCardEvaluationCronJob;
