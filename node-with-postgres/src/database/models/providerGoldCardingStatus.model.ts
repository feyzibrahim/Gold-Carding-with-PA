import { DataTypes } from "sequelize";
import { db } from "../index";
import Provider from "./provider.model";

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
      // model: "providers",
      model: Provider,
      key: "provider_id",
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
