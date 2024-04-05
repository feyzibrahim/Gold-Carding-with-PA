import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Payer from "./Payer";

interface GoldCardingRuleAttributes {
  rule_id: string;
  payer_id: string;
  description: string;
  metric: string;
  threshold: string;
  measurement_period_months: number;
}

class GoldCardingRule
  extends Model<GoldCardingRuleAttributes>
  implements GoldCardingRuleAttributes
{
  public rule_id!: string;
  public payer_id!: string;
  public description!: string;
  public metric!: string;
  public threshold!: string;
  public measurement_period_months!: number;
}

GoldCardingRule.init(
  {
    rule_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    payer_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Payer",
        key: "id",
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
  },
  {
    sequelize,
    modelName: "GoldCardingRule",
    tableName: "gold_carding_rules",
    timestamps: false,
  }
);

GoldCardingRule.belongsTo(Payer, { foreignKey: "payer_id" });

export default GoldCardingRule;
