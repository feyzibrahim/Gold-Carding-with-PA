import { Payer, Provider, ProviderGoldCardingStatus } from "../database/models";
import { ProviderGoldCardingStatusEntity } from "../entities";

export class ProviderGoldCardingStatusService {
  async create(data: ProviderGoldCardingStatusEntity) {
    const providerGoldCardingStatus = await ProviderGoldCardingStatus.create({
      ...data,
    });
    return providerGoldCardingStatus;
  }

  async findAll() {
    const providerGoldCardingStatus = await ProviderGoldCardingStatus.findAll();
    return providerGoldCardingStatus;
  }

  async findById(id: string | number) {
    const providerGoldCardingStatus = await ProviderGoldCardingStatus.findOne({
      where: { status_id: id },
    });
    return providerGoldCardingStatus;
  }

  async findByProviderAndPayer(provider_id: string, payer_id: string) {
    const goldCardingEvaluation = await ProviderGoldCardingStatus.findOne({
      where: { provider_id: provider_id, payer_id: payer_id },
    });
    return goldCardingEvaluation;
  }

  async findByProvider(provider_id: string) {
    const goldCardingEvaluation = await ProviderGoldCardingStatus.findAll({
      where: { provider_id: provider_id },
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

  async deleteProviderGoldCardingStatus(id: string | number) {
    const providerGoldCardingStatus = await ProviderGoldCardingStatus.findOne({
      where: { status_id: id },
    });
    if (!providerGoldCardingStatus) {
      return;
    }
    await providerGoldCardingStatus.destroy();
    return providerGoldCardingStatus;
  }

  async update(data: ProviderGoldCardingStatusEntity) {
    const updated = await ProviderGoldCardingStatus.update(
      {
        ...data,
      },
      {
        where: { status_id: data.status_id },
      }
    );
    return updated;
  }
}
