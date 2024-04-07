import { Payer, PriorAuthorizationRequest, Provider } from "../database/models";
import { PriorAuthorizationRequestEntity } from "../entities";

export class PriorAuthorizationRequestService {
  async create(data: PriorAuthorizationRequestEntity) {
    const priorAuthorizationRequest = await PriorAuthorizationRequest.create({
      cpt_code: data.cpt_code,
      provider_id: data.provider_id,
      description: data.description,
      payer_id: data.payer_id,
      metric: data.metric,
    });
    return priorAuthorizationRequest;
  }

  async findAll() {
    const priorAuthorizationRequests = await PriorAuthorizationRequest.findAll({
      include: [
        {
          model: Provider,
          as: "provider",
          attributes: ["provider_id", "name"],
        },
        {
          model: Payer,
          as: "payer",
          attributes: ["payer_id", "name"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return priorAuthorizationRequests;
  }

  async findById(id: string | number) {
    const priorAuthorizationRequest = await PriorAuthorizationRequest.findOne({
      where: { cpt_code: id },
    });
    return priorAuthorizationRequest;
  }
  async findByProvider(provider_id: string) {
    const priorAuthorizationRequest = await PriorAuthorizationRequest.findAll({
      where: { provider_id: provider_id },
      include: [
        {
          model: Payer,
          as: "payer",
          attributes: ["payer_id", "name"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return priorAuthorizationRequest;
  }

  async findByPayer(payer_id: string) {
    const priorAuthorizationRequest = await PriorAuthorizationRequest.findAll({
      where: { payer_id: payer_id },
      include: [
        {
          model: Provider,
          as: "provider",
          attributes: ["provider_id", "name"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return priorAuthorizationRequest;
  }

  async deletePriorAuthorizationRequest(id: string | number) {
    const priorAuthorizationRequest = await PriorAuthorizationRequest.findOne({
      where: { request_id: id },
    });
    if (!priorAuthorizationRequest) {
      return;
    }
    await priorAuthorizationRequest.destroy();
    return priorAuthorizationRequest;
  }

  async update(data: PriorAuthorizationRequestEntity) {
    const updated = await PriorAuthorizationRequest.update(
      {
        ...data,
      },
      {
        where: { request_id: data.request_id },
      }
    );
    return updated;
  }
}
