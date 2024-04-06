import { GoldCardingCriteria } from "../database/models";
import { GoldCardingCriteriaEntity } from "../entities";

export class GoldCardingCriteriaService {
  async create(data: GoldCardingCriteriaEntity) {
    const goldCardingCriteria = await GoldCardingCriteria.create({
      cpt_code: data.cpt_code,
      description: data.description,
      measurement_period_months: data.measurement_period_months,
      metric: data.metric,
      operator: data.operator,
      threshold: data.threshold,
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
    const updated = await GoldCardingCriteria.update(
      {
        ...data,
      },
      {
        where: { criteria_id: data.criteria_id },
      }
    );
    return updated;
  }
}
