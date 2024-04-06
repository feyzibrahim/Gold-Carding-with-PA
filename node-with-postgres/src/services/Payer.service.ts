import { Payer } from "../database/models";
import { PayerEntity } from "../entities";

export class PayerService {
  async create(data: PayerEntity) {
    const payer = await Payer.create({
      name: data.name,
      description: data.description,
    });
    return payer;
  }

  async findAll() {
    const payers = await Payer.findAll();
    return payers;
  }

  async findById(id: string | number) {
    const payer = await Payer.findOne({ where: { payer_id: id } });
    return payer;
  }

  async deletePayer(id: string | number) {
    const payer = await Payer.findOne({ where: { payer_id: id } });
    if (!payer) {
      return;
    }
    await payer.destroy();
    return payer;
  }

  async update(data: PayerEntity) {
    const updated = await Payer.update(
      {
        name: data.name,
        description: data.description,
      },
      {
        where: { payer_id: data.payer_id },
      }
    );
    return updated;
  }
}
