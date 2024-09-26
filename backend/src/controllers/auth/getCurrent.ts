import { Request, Response, NextFunction  } from "express";
import { IUser } from "../../models/user";


interface AuthenticatedRequest extends Request {
  user?: IUser & { _id: string }; // Додаємо поле _id для користувача
}

const getCurrent = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Unauthorized" });
        return;
  }

  const {
    _id,
    email,
    name,
    logoURL,
    verify,
    token,
  } = req.user;
  const user = req.user

  // res.json({
  //   _id,
  //   email,
  //   name,
  //   logoURL,
  //   verify,
  // });
   res.status(201).json({
    // user: {
    //   _id,
    //   email,
    //   name,
    //   logoURL,
    //   verify,
    // },
    user,
    token    
  });
  // res.status(201).json(user);
} catch (error) {
    next(error); // Обробка помилок передається далі через next()
  }
};

export default getCurrent;