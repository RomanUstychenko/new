import express, { Request, Response, NextFunction } from 'express';
const cors = require('cors');
import dotenv from 'dotenv';
dotenv.config(); 

import connectDB from './db'; // Підключення до MongoDB

const app = express();
app.use(express.json()); // Для парсингу JSON
const port = process.env.PORT || 5000;

// Імпорт маршруту
import authRouter from '././routes/api/users';
import mainRouter from './routes/api/catalogs';
import itemRouter from'./routes/api/items';


app.use(cors());


// Використання маршруту
app.use("/api/users", authRouter);
app.use("/api/main", mainRouter);
app.use("/api/items", itemRouter);

// Обробник помилок 404
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
});

// Глобальний обробник помилок
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
// Підключення до бази даних
connectDB();
// Запуск сервера
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});