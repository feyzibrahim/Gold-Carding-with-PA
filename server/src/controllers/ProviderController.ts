import { Request, Response } from "express";
import Provider from "../models/Provider";

// Get all providers
export const getAllProviders = async (req: Request, res: Response) => {
  try {
    const providers = await Provider.findAll();
    res.status(200).json(providers);
  } catch (error) {
    console.error("Error fetching providers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get provider by ID
export const getProviderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const provider = await Provider.findByPk(id);
    if (!provider) {
      res.status(404).json({ error: "Provider not found" });
      return;
    }
    res.status(200).json(provider);
  } catch (error) {
    console.error("Error fetching provider:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new provider
export const createProvider = async (req: Request, res: Response) => {
  const { name, specialty }: { name: string; specialty: string } = req.body;
  try {
    const newProvider = await Provider.create({ name, specialty });
    res.status(201).json(newProvider);
  } catch (error) {
    console.error("Error creating provider:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an existing provider
export const updateProvider = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, specialty } = req.body;
  try {
    const provider = await Provider.findByPk(id);
    if (!provider) {
      res.status(404).json({ error: "Provider not found" });
      return;
    }
    await provider.update({ name, specialty });
    res.status(200).json(provider);
  } catch (error) {
    console.error("Error updating provider:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete an existing provider
export const deleteProvider = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const provider = await Provider.findByPk(id);
    if (!provider) {
      res.status(404).json({ error: "Provider not found" });
      return;
    }
    await provider.destroy();
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting provider:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
