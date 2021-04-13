import mongoose from "mongoose";
import "dotenv/config";

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
  authSource: "admin",
  useFindAndModify: "false",
};

// Create cached connection variable
const connection = {};

const DB_URI = process.env.MONGO_URL;

const connectDb = (handler) => async (req, res) => {
  if (connection.isConnected) {
    return handler(req, res);
  }
  try {
    const dbConnection = await mongoose.connect(DB_URI, options);
    connection.isConnected = dbConnection.connections[0].readyState;
  } catch (err) {
    logger.error(`error connecting to db ${err.message || err}`);
  }
  return handler(req, res);
};

export default connectDb;
