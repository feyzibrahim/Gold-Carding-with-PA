require('dotenv').config();
import dbConnect from "./database";
import app from "./app";

(async () => {
    try {
        if(!process.env.DB_USERNAME) {
            throw new Error("Database username required!");
        }
        if(!process.env.DB_PASSWORD) {
            throw new Error("Database password required!");
        }
        if(!process.env.DB_HOST) {
            throw new Error("Database host required!");
        }
        if(!process.env.DB_PORT) {
            throw new Error("Database port required!");
        }
        if(!process.env.DB_NAME) {
            throw new Error("Database name required!");
        }
        await dbConnect();
        app;
    } catch (error) {
        console.info(error);
        process.exit(1);
    }
})();