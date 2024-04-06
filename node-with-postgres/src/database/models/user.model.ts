import { DataTypes } from "sequelize";
import { db } from "../index";

const User = db.define("users", {
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
