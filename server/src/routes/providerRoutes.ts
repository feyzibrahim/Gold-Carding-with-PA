import express from "express";
import * as ProviderController from "../controllers/ProviderController";

const router = express.Router();

router.get("/", ProviderController.getAllProviders);
router.get("/:id", ProviderController.getProviderById);
router.post("/", ProviderController.createProvider);
router.put("/:id", ProviderController.updateProvider);
router.delete("/:id", ProviderController.deleteProvider);

export default router;
