import { DataTypes, Model } from "sequelize";
import { db } from "../index";
import { GoldCardingCriteriaEntity } from "../../entities";

const GoldCardingCriteria = db.define<Model<GoldCardingCriteriaEntity>>(
  "goldCardingCriteria",
  {
    criteria_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.FLOAT, // Adjust data type to accommodate threshold values
      allowNull: false,
    },
    measurement_period_months: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }
);

// Create the table
(async () => {
  try {
    await GoldCardingCriteria.sync(); // This will create the table if it doesn't exist
    console.log("GoldCardingCriteria table created successfully.");
  } catch (error) {
    console.error("Unable to create GoldCardingCriteria table:", error);
  }
})();

export default GoldCardingCriteria;
