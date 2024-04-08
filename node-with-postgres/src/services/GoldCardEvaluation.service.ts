import { GoldCardEvaluation, Payer, Provider } from "../database/models";

export class GoldCardEvaluationService {
  async findAll() {
    const goldCardingEvaluation = await GoldCardEvaluation.findAll({
      include: [
        {
          model: Payer,
          as: "payer",
          attributes: ["payer_id", "name"],
        },
        {
          model: Provider,
          as: "provider",
          attributes: ["provider_id", "name"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return goldCardingEvaluation;
  }

  async findById(id: string | number) {
    const goldCardingEvaluation = await GoldCardEvaluation.findOne({
      where: { evaluation_id: id },
      include: [
        {
          model: Payer,
          as: "payer",
          attributes: ["payer_id", "name"],
        },
        {
          model: Provider,
          as: "provider",
          attributes: ["provider_id", "name"],
        },
      ],
    });
    return goldCardingEvaluation;
  }
  async findByProvider(id: string | number) {
    const goldCardingEvaluation = await GoldCardEvaluation.findAll({
      where: { provider_id: id },
      include: [
        {
          model: Payer,
          as: "payer",
          attributes: ["payer_id", "name"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return goldCardingEvaluation;
  }

  async findByProviderAndPayer(provider_id: string, payer_id: string) {
    const goldCardingEvaluation = await GoldCardEvaluation.findOne({
      where: { provider_id: provider_id, payer_id: payer_id },
    });
    return goldCardingEvaluation;
  }

  async deleteGoldCardingEvaluation(id: string | number) {
    const goldCardingEvaluation = await GoldCardEvaluation.findOne({
      where: { evaluation_id: id },
    });
    if (!goldCardingEvaluation) {
      return;
    }
    await goldCardingEvaluation.destroy();
    return goldCardingEvaluation;
  }
}
