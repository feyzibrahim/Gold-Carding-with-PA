import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "dynamic_gold_carding_db",
  "postgres",
  "postgres",
  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }
);

export default sequelize;
