import express from "express";
const app = express();
const port = 3000;
import ProviderRoutes from "./routes/providerRoutes";

app.use("/api/provider", ProviderRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
