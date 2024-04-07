import { CptCode } from "../database/models";
import { CptCodeEntity } from "../entities";

export class CptCodeService {
  async create(data: CptCodeEntity) {
    const cptCode = await CptCode.create({
      cpt_code: data.cpt_code,
      description: data.description,
    });
    return cptCode;
  }

  async findAll() {
    const cptCodes = await CptCode.findAll({
      order: [["createdAt", "DESC"]],
    });
    return cptCodes;
  }

  async findById(id: string | number) {
    const cptCode = await CptCode.findOne({ where: { cpt_code: id } });
    return cptCode;
  }

  async deleteCptCode(id: string | number) {
    const cptCode = await CptCode.findOne({ where: { cpt_code: id } });
    if (!cptCode) {
      return;
    }
    await cptCode.destroy();
    return cptCode;
  }

  async update(data: CptCodeEntity, code: string) {
    await CptCode.update(
      {
        cpt_code: data.cpt_code,
        description: data.description,
      },
      {
        where: { cpt_code: code },
      }
    );

    const cptCode = await CptCode.findOne({
      where: { cpt_code: data.cpt_code },
    });

    return cptCode;
  }
}
