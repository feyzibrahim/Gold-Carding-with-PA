import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import CptCode from "./CptCode";

interface GoldCardingCriteriaAttributes {
  criteria_id: string;
  description: string;
  metric: string;
  threshold: string;
  operator: string;
  measurement_period_months: number;
  cpt_code_id: string;
}

class GoldCardingCriteria
  extends Model<GoldCardingCriteriaAttributes>
  implements GoldCardingCriteriaAttributes
{
  public criteria_id!: string;
  public description!: string;
  public metric!: string;
  public threshold!: string;
  public operator!: string;
  public measurement_period_months!: number;
  public cpt_code_id!: string;
}

GoldCardingCriteria.init(
  {
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
        model: "CptCode",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "GoldCardingCriteria",
    tableName: "gold_carding_criteria",
    timestamps: false,
  }
);

GoldCardingCriteria.belongsTo(CptCode, { foreignKey: "cpt_code_id" });

export default GoldCardingCriteria;
