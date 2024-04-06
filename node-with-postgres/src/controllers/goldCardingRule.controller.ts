import { Router, Request, Response, NextFunction } from "express";
import { GoldCardingRuleService } from "../services";
import { GoldCardingRuleEntity } from "../entities";

const router = Router();
const service = new GoldCardingRuleService();

router
  .route("/goldCardingRule")
  //GET => Find all goldCardingRules
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await service.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //POST => Create new goldCardingRule
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: GoldCardingRuleEntity = req.body;
      const data = await service.create({
        ...body,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  });

router
  .route("/goldCardingRule/:id")
  //GET => Find goldCardingRule by id
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.findById(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //GET => Find goldCardingRule by id
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.deleteGoldCardingRule(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //PUT => Update existing goldCardingRule
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      if (!id) {
        throw Error("No id found");
      }

      const body: GoldCardingRuleEntity = req.body;
      const data = await service.update({
        ...body,
        rule_id: id,
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

export default router;
