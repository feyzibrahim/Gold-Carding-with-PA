import { DataTypes } from "sequelize";
import { db } from "../index";

const CptCode = db.define("cptCode", {
  cpt_code: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Create the table
(async () => {
  try {
    await CptCode.sync(); // This will create the table if it doesn't exist
    console.log("CptCodes table created successfully.");
  } catch (error) {
    console.error("Unable to create cptCode table:", error);
  }
})();

export default CptCode;
