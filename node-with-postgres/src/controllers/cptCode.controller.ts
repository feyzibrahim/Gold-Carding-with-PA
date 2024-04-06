import { Router, Request, Response, NextFunction } from "express";
import { CptCodeService } from "../services";
import { CptCodeEntity } from "../entities";

const router = Router();
const service = new CptCodeService();

router
  .route("/cptCode")
  //GET => Find all cptCodes
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await service.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //POST => Create new cptCode
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: CptCodeEntity = req.body;
      const data = await service.create({
        ...body,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  });

router
  .route("/cptCode/:id")
  //GET => Find cptCode by id
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.findById(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //GET => Find cptCode by id
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.deleteCptCode(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //PUT => Update existing cptCode
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      if (!id) {
        throw Error("No id found");
      }

      const body: CptCodeEntity = req.body;
      const data = await service.update({
        ...body,
        cpt_code: id,
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

export default router;
