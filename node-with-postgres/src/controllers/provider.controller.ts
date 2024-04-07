import { Router, Request, Response, NextFunction } from "express";
import { ProviderService } from "../services";
import { ProviderEntity } from "../entities";

const router = Router();
const service = new ProviderService();

router
  .route("/provider")
  //GET => Find all providers
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await service.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //POST => Create new provider
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: ProviderEntity = req.body;
      const data = await service.create({
        ...body,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  });

router
  .route("/provider/:id")
  //GET => Find provider by id
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.findById(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //GET => Find provider by id
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.deleteProvider(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //PUT => Update existing provider
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      if (!id) {
        throw Error("No id found");
      }

      const body: ProviderEntity = req.body;
      const data = await service.update({
        provider_id: id,
        ...body,
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

export default router;
