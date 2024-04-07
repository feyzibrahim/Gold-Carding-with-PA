import { DataTypes, Model } from "sequelize";
import { db } from "../index";
import { GoldCardEvaluationEntity } from "../../entities";
import Provider from "./provider.model";
import Payer from "./payer.model";

const GoldCardEvaluation = db.define<Model<GoldCardEvaluationEntity>>(
  "goldCardEvaluation",
  {
    evaluation_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    evaluation_criteria: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    gold_carding_level: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    evaluation_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }
);

// Create the table
(async () => {
  try {
    await GoldCardEvaluation.sync(); // This will create the table if it doesn't exist
    console.log("GoldCardEvaluations table created successfully.");
  } catch (error) {
    console.error("Unable to create providers table:", error);
  }
})();

export default GoldCardEvaluation;
