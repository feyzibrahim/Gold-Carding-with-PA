import { GoldCardingCriteria } from "../database/models";
import { GoldCardingCriteriaEntity } from "../entities";

export class GoldCardingCriteriaService {
  async create(data: GoldCardingCriteriaEntity) {
    const goldCardingCriteria = await GoldCardingCriteria.create({
      description: data.description,
      measurement_period_months: data.measurement_period_months,
      metric: data.metric,
      threshold: data.threshold,
      level: data.level,
    });
    return goldCardingCriteria;
  }

  async findAll() {
    const goldCardingCriteria = await GoldCardingCriteria.findAll();
    return goldCardingCriteria;
  }

  async findById(id: string | number) {
    const goldCardingCriteria = await GoldCardingCriteria.findOne({
      where: { criteria_id: id },
    });
    return goldCardingCriteria;
  }

  async deleteGoldCardingCriteria(id: string | number) {
    const goldCardingCriteria = await GoldCardingCriteria.findOne({
      where: { criteria_id: id },
    });
    if (!goldCardingCriteria) {
      return;
    }
    await goldCardingCriteria.destroy();
    return goldCardingCriteria;
  }

  async update(data: GoldCardingCriteriaEntity) {
    await GoldCardingCriteria.update(
      {
        ...data,
      },
      {
        where: { criteria_id: data.criteria_id },
      }
    );

    const goldCardingCriteria = await GoldCardingCriteria.findOne({
      where: { criteria_id: data.criteria_id },
    });

    return goldCardingCriteria;
  }
}
