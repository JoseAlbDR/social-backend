import mongoose from "mongoose";

export default () => {
  const connect = async () => {
    try {
      const DB = await mongoose.connect(
        "mongodb://127.0.0.1:27017/socialapp-backend"
      );
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
