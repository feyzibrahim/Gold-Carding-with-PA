import { DataTypes } from "sequelize";
import { db } from "../index";

const Provider = db.define("providers", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  provider_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Create the table
(async () => {
  try {
    await Provider.sync(); // This will create the table if it doesn't exist
    console.log("Providers table created successfully.");
  } catch (error) {
    console.error("Unable to create providers table:", error);
  }
})();

export default Provider;
