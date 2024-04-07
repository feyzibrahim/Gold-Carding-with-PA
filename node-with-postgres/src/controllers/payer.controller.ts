import { Router, Request, Response, NextFunction } from "express";
import { PayerService } from "../services";

const router = Router();
const service = new PayerService();

router
  .route("/payer")
  //GET => Find all payers
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await service.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //POST => Create new payer
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, description } = req.body;
      const data = await service.create({
        name,
        description,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  });

router
  .route("/payer/:id")
  //GET => Find payer by id
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.findById(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //GET => Find payer by id
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.deletePayer(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //PUT => Update existing payer
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      if (!id) {
        throw Error("No id found");
      }

      const { name, description } = req.body;
      const data = await service.update({
        payer_id: id,
        name,
        description,
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

export default router;
