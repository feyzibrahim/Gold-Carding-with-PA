import { Router, Request, Response, NextFunction } from "express";
import { GoldCardEvaluationService } from "../services";

const router = Router();
const service = new GoldCardEvaluationService();

router
  .route("/goldCardingEvaluation")
  //GET => Find all goldCardingEvaluation
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await service.findAll();
      res.status(200).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  });

router
  .route("/goldCardingEvaluation/provider/:id")
  //GET => Find goldCardingEvaluation by id
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
  .route("/goldCardingEvaluation/:id")
  //GET => Find goldCardingEvaluation by id
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
      const data = await service.deleteGoldCardingEvaluation(id);
      res.status(200).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  });

export default router;
