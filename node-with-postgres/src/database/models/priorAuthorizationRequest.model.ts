import { DataTypes, Model } from "sequelize";
import { db } from "../index";
import Provider from "./provider.model";
import CptCode from "./cptCode.model";
import Payer from "./payer.model";
import { PriorAuthorizationRequestEntity } from "../../entities";

const PriorAuthorizationRequest = db.define<
  Model<PriorAuthorizationRequestEntity>
>("priorAuthorizationRequest", {
  request_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: DataTypes.UUIDV4,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  provider_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  payer_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  cpt_code: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  metric: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  approval_status: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  denial_reason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  auto_approval: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});

// Define the association between PriorAuthorizationRequest and Provider
PriorAuthorizationRequest.belongsTo(Provider, {
  foreignKey: "provider_id",
  as: "provider",
});

// Define the association between Provider and PriorAuthorizationRequest
Provider.hasMany(PriorAuthorizationRequest, {
  foreignKey: "provider_id",
  as: "priorAuthorizationRequests",
});

PriorAuthorizationRequest.belongsTo(Payer, {
  // Add association to Payer model
  foreignKey: "payer_id",
  as: "payer",
});

Payer.hasMany(PriorAuthorizationRequest, {
  // Add association to Payer model
  foreignKey: "payer_id",
  as: "priorAuthorizationRequests",
});

// Create the table
(async () => {
  try {
    await Provider.sync();
    await CptCode.sync();
    await Payer.sync();
    await PriorAuthorizationRequest.sync(); // This will create the table if it doesn't exist
    console.log("PriorAuthorizationRequests table created successfully.");
  } catch (error) {
    console.error("Unable to create PriorAuthorizationRequests table:", error);
  }
})();

export default PriorAuthorizationRequest;
