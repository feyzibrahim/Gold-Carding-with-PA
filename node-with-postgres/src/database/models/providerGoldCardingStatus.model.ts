import { DataTypes } from "sequelize";
import { db } from "../index";

const ProviderGoldCardingStatus = db.define("providerGoldCardingStatus", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  code: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Create the table
(async () => {
  try {
    await ProviderGoldCardingStatus.sync(); // This will create the table if it doesn't exist
    console.log("ProviderGoldCardingStatus table created successfully.");
  } catch (error) {
    console.error("Unable to create providerGoldCardingStatus table:", error);
  }
})();

export default ProviderGoldCardingStatus;
