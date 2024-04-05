import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

interface CptCodeAttributes {
  id: string;
  code: string;
  description: string;
}

class CptCode extends Model<CptCodeAttributes> implements CptCodeAttributes {
  public id!: string;
  public code!: string;
  public description!: string;
}

CptCode.init(
  {
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
  },
  {
    sequelize,
    modelName: "CptCode",
    tableName: "cpt_codes",
    timestamps: false,
  }
);

export default CptCode;
