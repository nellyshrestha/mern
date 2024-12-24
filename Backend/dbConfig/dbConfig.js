import mongoose from "mongoose"

const connectDB = async () => {
  try {
      const conn = await mongoose.connect( "mongodb://127.0.0.1:27017/library-class", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
      console.error("Database Connection Error: ", error);
      process.exit(1);
  }
};
  
  export default connectDB;


 