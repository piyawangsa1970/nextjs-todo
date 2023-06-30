import mongoose from "mongoose";

const { MONGO_URI } = process.env;

export const connectDB = async () => {

    if (!MONGO_URI) {
        throw new Error("MONGO_COMPASS must be defined");
    }

    try {
        const { connection } = await mongoose.connect(MONGO_URI);
        if (connection.readyState === 1) {
          return Promise.resolve(true);
        }
      } catch (error) {
        console.error(error);
        return Promise.reject(error);
      }
}
