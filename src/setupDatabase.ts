import mongoose from "mongoose";

export default () => {
  const connect = async () => {
    try {
      const DB = await mongoose.connect(
        "mongodb://localhost:27017/socialapp-backend"
      );
      if (DB) {
        console.log("Connected to DB");
        console.log(DB.connection);
      }
    } catch (err) {
      console.log("Error connection to database", err);
      return process.exit(1);
    }
  };
  connect();

  mongoose.connection.on("disconnected ", connect);
};
