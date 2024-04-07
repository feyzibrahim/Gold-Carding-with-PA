import { Router, Request, Response, NextFunction } from "express";
import { PriorAuthorizationRequestService } from "../services";
import { PriorAuthorizationRequestEntity } from "../entities";

const router = Router();
const service = new PriorAuthorizationRequestService();

router
  .route("/priorAuthorizationRequest")
  //GET => Find all priorAuthorizationRequests
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await service.findAll();
      res.status(200).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  })
  //POST => Create new priorAuthorizationRequest
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: PriorAuthorizationRequestEntity = req.body;
      const data = await service.create({
        ...body,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  });

router
  .route("/priorAuthorizationRequest/provider_id/:provider_id")
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const provider_id = req.params?.provider_id;

      const data = await service.findByProvider(provider_id);
      res.status(201).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  });

router
  .route("/priorAuthorizationRequest/payer_id/:payer_id")
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payer_id = req.params?.payer_id;

      const data = await service.findByPayer(payer_id);
      res.status(201).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  });

router
  .route("/priorAuthorizationRequest/:id")
  //GET => Find priorAuthorizationRequest by id
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.findById(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //GET => Find priorAuthorizationRequest by id
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.deletePriorAuthorizationRequest(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //PUT => Update existing priorAuthorizationRequest
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      if (!id) {
        throw Error("No id found");
      }

      const body: PriorAuthorizationRequestEntity = req.body;

      const data = await service.update({
        ...body,
        request_id: id,
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

export default router;
