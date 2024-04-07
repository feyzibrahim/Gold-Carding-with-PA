import { Router, Request, Response, NextFunction } from "express";
import { GoldCardingCriteriaService } from "../services";
import { GoldCardingCriteriaEntity } from "../entities";

const router = Router();
const service = new GoldCardingCriteriaService();

router
  .route("/goldCardingCriteria")
  //GET => Find all goldCardingCriteria
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await service.findAll();
      res.status(200).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  })
  //POST => Create new goldCardingCriteria
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: GoldCardingCriteriaEntity = req.body;
      const data = await service.create({
        ...body,
      });
      res.status(201).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  });

router
  .route("/goldCardingCriteria/:id")
  //GET => Find goldCardingCriteria by id
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.findById(id);
      res.status(200).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  })
  //GET => Find goldCardingCriteria by id
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.deleteGoldCardingCriteria(id);
      res.status(200).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  })
  //PUT => Update existing goldCardingCriteria
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      if (!id) {
        throw Error("No id found");
      }

      const body: GoldCardingCriteriaEntity = req.body;
      const data = await service.update({
        ...body,
        criteria_id: id,
      });
      res.status(200).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  });

export default router;
