import mongoose from "mongoose";
import { config } from "./config";
export default () => {
  const connect = async () => {
    try {
      const DB = await mongoose.connect(`${config.DATABASE_URL}`);
      if (DB) {
        console.log("Succesfully connected to database");
      }
    } catch (err) {
      console.log("Error connection to database", err);
      return process.exit(1);
    }
  };
  connect();

  mongoose.connection.on("disconnected ", connect);
};
