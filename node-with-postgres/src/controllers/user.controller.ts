import { Router, Request, Response, NextFunction } from "express";
import { UserService } from "../services";

const router = Router();
const service = new UserService();

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
      const { name, email, password } = req.body;
      const data = await service.create({
        name,
        email,
        password,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  })
  //PUT => Update existing user
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password, id } = req.body;
      const data = await service.update({
        name,
        email,
        password,
        id,
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
