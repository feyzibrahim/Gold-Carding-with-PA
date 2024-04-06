import { Router, Request, Response, NextFunction } from "express";
import { UserService } from "../services";
import { UserEntity } from "../entities";

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
      const { name, email, password, role } = req.body;
      const data = await service.create({
        name,
        email,
        password,
        role,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  })
  //PUT => Update existing user
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password, id, role } = req.body;
      const data = await service.update({
        name,
        email,
        password,
        id,
        role,
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
  })
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params?.id;
      const data = await service.deleteUser(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

router
  .route("/auth/login")
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const data = await service.findByEmail(email);
      if (!data) {
        throw Error("Email not registered");
      }
      const userEntity: UserEntity = data.toJSON() as UserEntity;
      if (userEntity.password !== password) {
        throw new Error("Incorrect password");
      }

      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  });

export default router;
