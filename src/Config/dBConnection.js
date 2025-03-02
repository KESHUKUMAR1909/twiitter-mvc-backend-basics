import mongoose from "mongoose"; // ✅ Correct import
import { MONGO_URL } from "./serverConfig.js"; // Ensure correct import

export const connectDB = async () => {
    if (!MONGO_URL) {
        console.error("MONGO_URL is not defined!");
        return;
    }

    try {
        await mongoose.connect(MONGO_URL);
        console.log("✅ DB Connection Setup Successfully");
    } catch (error) {
        console.error("❌ Failed to setup Connection:", error);
    }
};
