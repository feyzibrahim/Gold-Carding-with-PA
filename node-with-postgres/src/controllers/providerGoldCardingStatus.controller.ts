import { Router, Request, Response, NextFunction } from "express";
import { ProviderGoldCardingStatusService } from "../services";
import { ProviderGoldCardingStatusEntity } from "../entities";

const router = Router();
const service = new ProviderGoldCardingStatusService();

router
  .route("/providerGoldCardingStatus")
  //GET => Find all providerGoldCardingStatus
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await service.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //POST => Create new providerGoldCardingStatus
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: ProviderGoldCardingStatusEntity = req.body;
      const data = await service.create({
        ...body,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  });

router
  .route("/providerGoldCardingStatus/provider/:id")
  //GET => Find providerGoldCardingStatus by id
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;

      const data = await service.findByProvider(id);

      res.status(200).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  });

router
  .route("/providerGoldCardingStatus/:id")
  //GET => Find providerGoldCardingStatus by id
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.findById(id);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //GET => Find providerGoldCardingStatus by id
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.deleteProviderGoldCardingStatus(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //PUT => Update existing providerGoldCardingStatus
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      if (!id) {
        throw Error("No id found");
      }

      const body: ProviderGoldCardingStatusEntity = req.body;
      const data = await service.update({
        ...body,
        status_id: id,
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

export default router;
