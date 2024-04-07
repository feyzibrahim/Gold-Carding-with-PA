import { DataTypes, Model } from "sequelize";
import { db } from "../index";
import { UserEntity } from "../../entities";
import Provider from "./provider.model";
import Payer from "./payer.model";

const User = db.define<Model<UserEntity>>("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(10),
  },
  payer_id: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: Payer,
      key: "payer_id",
    },
  },
  provider_id: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: Provider,
      key: "provider_id",
    },
  },
});

// Create the table
(async () => {
  try {
    await User.sync(); // This will create the table if it doesn't exist
    console.log("Users table created successfully.");
  } catch (error) {
    console.error("Unable to create users table:", error);
  }
})();

export default User;
