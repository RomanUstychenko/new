import { Error } from "mongoose";

// Інтерфейс для помилки Mongoose
interface MongooseError extends Error {
  name: string;
  code?: number;
  status?: number;
}

// Функція для обробки помилок Mongoose
const handleMongooseError = (error: MongooseError, _doc: any, next: (err?: any) => void) => {
  const { name, code } = error;
  error.status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  next(error);
};

export default handleMongooseError;