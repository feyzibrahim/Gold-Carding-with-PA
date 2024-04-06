import { Provider } from "../database/models";
import { ProviderEntity } from "../entities";

export class ProviderService {
  async create(data: ProviderEntity) {
    const provider = await Provider.create({
      name: data.name,
      specialty: data.specialty,
    });
    return provider;
  }

  async findAll() {
    const providers = await Provider.findAll();
    return providers;
  }

  async findById(id: string | number) {
    const provider = await Provider.findOne({ where: { id: id } });
    return provider;
  }

  async update(data: ProviderEntity) {
    const updated = await Provider.update(
      {
        name: data.name,
        specialty: data.specialty,
      },
      {
        where: { id: data.id },
      }
    );
    return updated;
  }
}
