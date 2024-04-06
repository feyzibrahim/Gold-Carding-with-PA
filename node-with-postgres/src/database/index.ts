import { Sequelize } from "sequelize";
export const db = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const dbConnect = async () => {
    try {
        await db.authenticate();
        console.log('database connection established successfully');
    } catch (error) {
        console.log('database connection failed', error);
    }
}

export default dbConnect;