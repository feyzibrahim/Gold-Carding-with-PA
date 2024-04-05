import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

interface PayerAttributes {
  id: string;
  name: string;
  description: string;
}

class Payer extends Model<PayerAttributes> implements PayerAttributes {
  public id!: string;
  public name!: string;
  public description!: string;
}

Payer.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
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
    modelName: "Payer",
    tableName: "payers",
    timestamps: false,
  }
);

export default Payer;
