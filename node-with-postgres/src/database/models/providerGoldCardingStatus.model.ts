import { DataTypes } from "sequelize";
import { db } from "../index";
import Provider from "./provider.model";
import Payer from "./payer.model";

const ProviderGoldCardingStatus = db.define("providerGoldCardingStatus", {
  status_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  provider_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Provider,
      key: "provider_id",
    },
  },
  payer_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Payer,
      key: "payer_id",
    },
  },
  criteria_met: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  gold_carding_level: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valid_from: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  valid_until: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Define the association between ProviderGoldCardingStatus and Provider
ProviderGoldCardingStatus.belongsTo(Payer, {
  foreignKey: "payer_id",
  as: "payer",
});

// Define the association between Payer and ProviderGoldCardingStatus
Payer.hasMany(ProviderGoldCardingStatus, {
  foreignKey: "payer_id",
  as: "providerGoldCardingStatus",
});

// Define the association between PriorAuthorizationRequest and Provider
ProviderGoldCardingStatus.belongsTo(Provider, {
  foreignKey: "provider_id",
  as: "provider",
});

// Define the association between Provider and PriorAuthorizationRequest
Provider.hasMany(ProviderGoldCardingStatus, {
  foreignKey: "provider_id",
  as: "providerGoldCardingStatus",
});

// Create the table
(async () => {
  try {
    await Provider.sync();

    await ProviderGoldCardingStatus.sync(); // This will create the table if it doesn't exist
    console.log("ProviderGoldCardingStatus table created successfully.");
  } catch (error) {
    console.error("Unable to create providerGoldCardingStatus table:", error);
  }
})();

export default ProviderGoldCardingStatus;
