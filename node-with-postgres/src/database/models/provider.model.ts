import { DataTypes, Model } from "sequelize";
import { db } from "../index";
import { ProviderEntity } from "../../entities";

const Provider = db.define<Model<ProviderEntity>>("provider", {
  provider_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  approval_rate: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  submission_volume: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  readmission_rate: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  treatment_guideline_adherence: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

// Create the table
(async () => {
  try {
    await Provider.sync(); // This will create the table if it doesn't exist
    console.log("Providers table created successfully.");
  } catch (error) {
    console.error("Unable to create providers table:", error);
  }
})();

export default Provider;
