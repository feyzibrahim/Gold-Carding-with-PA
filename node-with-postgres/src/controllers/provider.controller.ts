import { Router, Request, Response, NextFunction } from "express";
import { ProviderService } from "../services";

const router = Router();
const service = new ProviderService();

router
  .route("/user")
  //GET => Find all users
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await service.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })
  //POST => Create new user
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, specialty } = req.body;
      const data = await service.create({
        name,
        specialty,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  })
  //PUT => Update existing user
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, specialty } = req.body;
      const data = await service.update({
        name,
        specialty,
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

router
  .route("/user/:id")
  //GET => Find user by id
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.findById(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

export default router;
