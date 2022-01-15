import mongoose from "mongoose";

const connectionDB = () => {
  try {
      mongoose.connect("mongodb://localhost:27017/trader");
      console.log('connected to mongodb');
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

export default connectionDB;