import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected");
  } catch (error) {
    console.error("mongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDb;
