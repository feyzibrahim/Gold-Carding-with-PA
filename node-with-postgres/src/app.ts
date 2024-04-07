import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response, NextFunction } from "express";
import {
  UserController,
  ProviderController,
  CptCodeController,
  GoldCardingRuleController,
  GoldCardingCriteriaController,
  PayerController,
  ProviderGoldCardingStatusController,
  PriorAuthorizationRequest,
} from "./controllers";
import cors from "cors";
import { startProviderDataUpdateCronJob } from "./cron/startProviderDataUpdateCronJob";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = process.env.CLIENT_URL as string;
const corsOptions = {
  credentials: true,
  origin: [allowedOrigins],
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
};
app.use(cors(corsOptions));

app.use("/api", UserController);
app.use("/api", ProviderController);
app.use("/api", CptCodeController);
app.use("/api", GoldCardingRuleController);
app.use("/api", GoldCardingCriteriaController);
app.use("/api", PayerController);
app.use("/api", ProviderGoldCardingStatusController);
app.use("/api", PriorAuthorizationRequest);

// Cron Jobs

startProviderDataUpdateCronJob();

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res
    .status(400)
    .json({ error: err?.message || "Something went wrong", success: false });
});

app.listen(3000, () => {
  console.log("server listening at 3000");
});

export default app;
