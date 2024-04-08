import { GoldCardingCriteria } from "../database/models";
import { GoldCardingCriteriaEntity } from "../entities";

export class GoldCardingCriteriaService {
  async create(data: GoldCardingCriteriaEntity) {
    const goldCardingCriteria = await GoldCardingCriteria.create({
      ...data,
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
  async findByLevel(level: string) {
    const goldCardingCriteria = await GoldCardingCriteria.findAll({
      where: { level: level },
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
