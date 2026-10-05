import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONG_URL);
        console.log("DB conect");
    }
    catch (error) {
        console.error(error);
    }

}

export default connectDB;