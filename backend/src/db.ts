import mongoose from 'mongoose';

const { DB_HOST } = process.env;
console.log("DB_HOST", DB_HOST)
const connectDB = async () => {
  try {
    await mongoose.connect(DB_HOST || '');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;