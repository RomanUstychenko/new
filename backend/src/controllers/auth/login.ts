import { Request, Response, NextFunction } from "express";
import { User } from "../../models/user";
import { HttpError } from "../../helpers";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const { SECRET_KEY } = process.env;

interface JwtPayload {
  id: string;
}

interface LoginRequest extends Request {
  body: {
    email: string;
    password: string;
    name?: string;
    logoURL?: string;
    verify?: boolean;
  };
}

const login = async (req: LoginRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw HttpError(401, "Email or password is wrong");
    }

    if (!user.verify) {
      throw HttpError(401, "Email not verified");
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      throw HttpError(401, "Email or password is wrong");
    }

    const payload: JwtPayload = {
      id: user._id.toString(),
    };

    const token = jwt.sign(payload, SECRET_KEY as string, { expiresIn: "1h" });
    await User.findByIdAndUpdate(user._id, { token });

   const { password: _, ...userWithoutPassword } = user.toObject();
    res.status(201).json({user, token});
  } catch (error) {
    next(error);
  }
};

export default login;