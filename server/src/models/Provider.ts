import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

interface ProviderAttributes {
  provider_id?: string;
  name: string;
  specialty: string;
}

class Provider extends Model<ProviderAttributes> implements ProviderAttributes {
  public provider_id!: string;
  public name!: string;
  public specialty!: string;
}

Provider.init(
  {
    provider_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Provider",
    tableName: "providers",
    timestamps: false,
  }
);

export default Provider;
