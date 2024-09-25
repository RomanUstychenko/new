import { Request, Response } from "express";
import { User } from "../../models/user";


interface LogoutRequest extends Request {
    user?: {
      _id: string;
    };
  }

const logout = async (req: LogoutRequest, res: Response): Promise<void> => {
  const { _id } = req.user!;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({
    message: "Logout success response",
  });
};

export default logout;
