import { ProviderCptApproval } from "../database/models";
import { ProviderCptApprovalEntity } from "../entities";

export class ProviderCptApprovalService {
  async create(data: ProviderCptApprovalEntity) {
    const providerCptApproval = await ProviderCptApproval.create({
      approval_status: data.approval_status,
      cpt_code: data.cpt_code,
      denial_reason: data.denial_reason,
      provider_id: data.provider_id,
    });
    return providerCptApproval;
  }

  async findAll() {
    const providerCptApprovals = await ProviderCptApproval.findAll();
    return providerCptApprovals;
  }

  async findById(id: string | number) {
    const providerCptApproval = await ProviderCptApproval.findOne({
      where: { cpt_code: id },
    });
    return providerCptApproval;
  }

  async deleteProviderCptApproval(id: string | number) {
    const providerCptApproval = await ProviderCptApproval.findOne({
      where: { cpt_code: id },
    });
    if (!providerCptApproval) {
      return;
    }
    await providerCptApproval.destroy();
    return providerCptApproval;
  }

  async update(data: ProviderCptApprovalEntity) {
    const updated = await ProviderCptApproval.update(
      {
        ...data,
      },
      {
        where: { cpt_code: data.cpt_code },
      }
    );
    return updated;
  }
}
