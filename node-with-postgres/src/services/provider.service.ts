import { Provider } from "../database/models";
import { ProviderEntity } from "../entities";

export class ProviderService {
  async create(data: ProviderEntity) {
    const provider = await Provider.create({
      ...data,
    });
    return provider;
  }

  async findAll() {
    const providers = await Provider.findAll();
    return providers;
  }

  async findById(id: string | number) {
    const provider = await Provider.findOne({ where: { provider_id: id } });
    return provider;
  }

  async deleteProvider(id: string | number) {
    const provider = await Provider.findOne({ where: { provider_id: id } });
    if (!provider) {
      return;
    }
    await provider.destroy();
    return provider;
  }

  async update(data: ProviderEntity) {
    const updated = await Provider.update(
      {
        ...data,
      },
      {
        where: { provider_id: data.provider_id },
      }
    );
    return updated;
  }
}
