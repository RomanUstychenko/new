import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import {User} from '../../models/user';

import { sendEmail, HttpError } from '../../helpers';
const { BASE_URL, NODEMAILER_USER } = process.env;


interface RegisterRequest extends Request {
  body: {
    email: string;
    password: string;
    name?: string;
    logoURL?: string;
    verify?: boolean;
  };
}

const getUIAvatar = (
    name: string,
    size: number = 100,
    backgroundColor: string = 'random',
    textColor: string = 'ffffff'
  ): string => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${backgroundColor}&color=${textColor}&size=${size}`;
  };

const register = async (req: RegisterRequest, res: Response): Promise<void> => {
  const { email, password, name} = req.body;

  // Перевірка чи вже існує користувач
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  // Хешування пароля
  const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  };

  // Виклик функції хешування пароля і передача пароля
  const hashedPassword = await hashPassword(password);
 
  // Генерація аватара
//   const logoURL = gravatar.url(email);
const logoURL = getUIAvatar(name || 'User');
 
// const { nanoid } = await import('nanoid');

  // Створення токена для підтвердження пошти
  // const verificationToken = nanoid();
  const verificationToken = "gnfnbfsdvnajnswvwurhguerghvnxsdf";
  // Створення нового користувача
  const newUser = await User.create({
    ...req.body,
    password: hashedPassword,
    logoURL,
    verificationToken,
  });

  // Підготовка листа для підтвердження email
  const verifyEmail = {
    from: `"QR Menu 👻" <${NODEMAILER_USER}>`,
    to: email,
    subject: "Verify your email",
    html: `
    <p>Thank you for registration</p>
    <p>Please verify your email by clicking the link below:</p>
    <a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Verify your email</a>
    `,
  };

  // Надсилання листа
  await sendEmail(verifyEmail);

  // Відправка відповіді
  res.status(201).json({
    user: {
    name: newUser.name,
    email: newUser.email,
    logoURL: newUser.logoURL,
    verify: newUser.verify,
    id: newUser._id,
    },
  });
  // res.status(201).json(newUser);
};

export default register;