import express, { Application, Request, Response, NextFunction } from "express";
import { UserController } from "./controllers";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UserController);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({ error: err?.message || "Something went wrong" });
});

app.listen(3001, () => {
  console.log("server listening at 3000");
});

export default app;
