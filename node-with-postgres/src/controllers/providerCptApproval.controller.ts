import { Router, Request, Response, NextFunction } from "express";
import { ProviderCptApprovalService } from "../services";
import { ProviderCptApprovalEntity } from "../entities";

const router = Router();
const service = new ProviderCptApprovalService();

router
  .route("/providerCptApproval")
  //GET => Find all providerCptApprovals
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await service.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //POST => Create new providerCptApproval
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: ProviderCptApprovalEntity = req.body;
      const data = await service.create({
        ...body,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  });

router
  .route("/providerCptApproval/:id")
  //GET => Find providerCptApproval by id
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.findById(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //GET => Find providerCptApproval by id
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.deleteProviderCptApproval(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //PUT => Update existing providerCptApproval
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      if (!id) {
        throw Error("No id found");
      }

      const body: ProviderCptApprovalEntity = req.body;
      const data = await service.update({
        ...body,
        providerCptApproval_id: id,
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

export default router;
