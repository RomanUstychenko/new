import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { HttpError } from "../helpers";
import { User, IUser } from "../models/user"; // Додайте інтерфейс IUser, якщо він ще не визначений у моделі

const { SECRET_KEY = "" } = process.env;

// Інтерфейс для JWT токена
interface JwtPayload {
  id: string;
}

// Інтерфейс для запиту з автентифікованим користувачем
interface AuthenticatedRequest extends Request {
  user?: IUser & { _id: string }; // IUser представляє вашу модель користувача
}

const authenticate = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  
  if (bearer !== "Bearer") {
    return next(HttpError(401, "Unauthorized"));
  }
  
  try {
    const { id } = jwt.verify(token, SECRET_KEY) as JwtPayload;
    
    // Отримуємо користувача за ID і перевіряємо, чи існує токен
    const user = await User.findById(id) as (IUser & { _id: string }) | null;
    
    if (!user || !user.token) {
      return next(HttpError(401, "Unauthorized"));
    }
    
    req.user = user;
    next();
  } catch (error) {
    next(HttpError(401, "Invalid token"));
  }
};

export default authenticate;