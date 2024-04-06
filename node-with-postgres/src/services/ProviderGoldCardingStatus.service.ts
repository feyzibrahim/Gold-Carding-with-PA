import { ProviderGoldCardingStatus } from "../database/models";
import { ProviderGoldCardingStatusEntity } from "../entities";

export class ProviderGoldCardingStatusService {
  async create(data: ProviderGoldCardingStatusEntity) {
    const cptCode = await ProviderGoldCardingStatus.create({
      criteria_met: data.criteria_met,
      gold_carding_level: data.gold_carding_level,
      provider_id: data.provider_id,
      valid_from: data.valid_from,
      valid_until: data.valid_until,
    });
    return cptCode;
  }

  async findAll() {
    const cptCodes = await ProviderGoldCardingStatus.findAll();
    return cptCodes;
  }

  async findById(id: string | number) {
    const cptCode = await ProviderGoldCardingStatus.findOne({
      where: { status_id: id },
    });
    return cptCode;
  }

  async deleteProviderGoldCardingStatus(id: string | number) {
    const cptCode = await ProviderGoldCardingStatus.findOne({
      where: { status_id: id },
    });
    if (!cptCode) {
      return;
    }
    await cptCode.destroy();
    return cptCode;
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
