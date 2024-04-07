import { DataTypes, Model } from "sequelize";
import { db } from "../index";
import { GoldCardEvaluationEntity } from "../../entities";
import Provider from "./provider.model";
import Payer from "./payer.model";

const GoldCardEvaluation = db.define<Model<GoldCardEvaluationEntity>>(
  "goldCardEvaluation",
  {
    evaluation_id: {
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

// Define the association between GoldCardEvaluation and Provider
GoldCardEvaluation.belongsTo(Payer, {
  foreignKey: "payer_id",
  as: "payer",
});

// Define the association between Payer and GoldCardEvaluation
Payer.hasMany(GoldCardEvaluation, {
  foreignKey: "payer_id",
  as: "goldCardEvaluation",
});

// Define the association between PriorAuthorizationRequest and Provider
GoldCardEvaluation.belongsTo(Provider, {
  foreignKey: "provider_id",
  as: "provider",
});

// Define the association between Provider and PriorAuthorizationRequest
Provider.hasMany(GoldCardEvaluation, {
  foreignKey: "provider_id",
  as: "goldCardEvaluation",
});

// Create the table
(async () => {
  try {
    await Payer.sync();
    await Provider.sync();

    await GoldCardEvaluation.sync(); // This will create the table if it doesn't exist
    console.log("GoldCardEvaluations table created successfully.");
  } catch (error) {
    console.error("Unable to create providers table:", error);
  }
})();

export default GoldCardEvaluation;
