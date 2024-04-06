import { DataTypes } from "sequelize";
import { db } from "../index";

const GoldCardingCriteria = db.define("goldCardingCriteria", {
  criteria_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  metric: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  threshold: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  operator: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  measurement_period_months: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cpt_code_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "cptCode",
      key: "id",
    },
  },
});

// Create the table
(async () => {
  try {
    await GoldCardingCriteria.sync(); // This will create the table if it doesn't exist
    console.log("GoldCardingCriteria table created successfully.");
  } catch (error) {
    console.error("Unable to create cptCode table:", error);
  }
})();

export default GoldCardingCriteria;
