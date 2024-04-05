import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Provider from "./Provider";

interface ProviderGoldCardingStatusAttributes {
  status_id: string;
  provider_id: string;
  criteria_met: boolean;
  gold_carding_level: string;
  valid_from: Date;
  valid_until: Date;
}

class ProviderGoldCardingStatus
  extends Model<ProviderGoldCardingStatusAttributes>
  implements ProviderGoldCardingStatusAttributes
{
  public status_id!: string;
  public provider_id!: string;
  public criteria_met!: boolean;
  public gold_carding_level!: string;
  public valid_from!: Date;
  public valid_until!: Date;
}

ProviderGoldCardingStatus.init(
  {
    status_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    provider_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Provider",
        key: "provider_id",
      },
    },
    criteria_met: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    gold_carding_level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valid_from: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    valid_until: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ProviderGoldCardingStatus",
    tableName: "provider_gold_carding_status",
    timestamps: false,
  }
);

ProviderGoldCardingStatus.belongsTo(Provider, { foreignKey: "provider_id" });

export default ProviderGoldCardingStatus;
