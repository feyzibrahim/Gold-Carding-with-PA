import { DataTypes, Model } from "sequelize";
import { db } from "../index";
import { PayerEntity } from "../../entities";

const Payer = db.define<Model<PayerEntity>>("payer", {
  payer_id: {
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
});

// Create the table
(async () => {
  try {
    await Payer.sync(); // This will create the table if it doesn't exist
    console.log("Payers table created successfully.");
  } catch (error) {
    console.error("Unable to create payer table:", error);
  }
})();

export default Payer;
