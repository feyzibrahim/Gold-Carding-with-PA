import { DataTypes } from "sequelize";
import { db } from "../index";
import Payer from "./payer.model";

const GoldCardingRule = db.define("goldCardingRule", {
  rule_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  payer_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Payer,
      key: "payer_id",
    },
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
  measurement_period_months: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Create the table
(async () => {
  try {
    await Payer.sync();

    await GoldCardingRule.sync(); // This will create the table if it doesn't exist
    console.log("GoldCardingRules table created successfully.");
  } catch (error) {
    console.error("Unable to create goldCardingRule table:", error);
  }
})();

// Define foreign key references
// GoldCardingRule.belongsTo(Payer, { foreignKey: "payer_id" });

export default GoldCardingRule;
