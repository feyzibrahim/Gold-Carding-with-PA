import { GoldCardingRule } from "../database/models";
import { GoldCardingRuleEntity } from "../entities";

export class GoldCardingRuleService {
  async create(data: GoldCardingRuleEntity) {
    const cptCode = await GoldCardingRule.create({
      description: data.description,
      measurement_period_months: data.measurement_period_months,
      metric: data.metric,
      payer_id: data.payer_id,
      rule_id: data.rule_id,
      threshold: data.threshold,
    });
    return cptCode;
  }

  async findAll() {
    const cptCodes = await GoldCardingRule.findAll();
    return cptCodes;
  }

  async findById(id: string | number) {
    const cptCode = await GoldCardingRule.findOne({ where: { rule_id: id } });
    return cptCode;
  }

  async findByPayer(payer_id: string | number) {
    const cptCode = await GoldCardingRule.findAll({
      where: { payer_id: payer_id },
    });
    return cptCode;
  }

  async deleteGoldCardingRule(id: string | number) {
    const cptCode = await GoldCardingRule.findOne({ where: { rule_id: id } });
    if (!cptCode) {
      return;
    }
    await cptCode.destroy();
    return cptCode;
  }

  async update(data: GoldCardingRuleEntity) {
    await GoldCardingRule.update(
      {
        ...data,
      },
      {
        where: { rule_id: data.rule_id },
      }
    );
    const newData = await GoldCardingRule.findOne({
      where: { rule_id: data.rule_id },
    });

    return newData;
  }
}
