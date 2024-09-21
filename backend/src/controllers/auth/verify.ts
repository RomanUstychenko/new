import { Request, Response, NextFunction  } from 'express';
import { User } from '../../models/user';
import { HttpError } from '../../helpers';


// Використовуємо параметризацію типу Request для додавання типу для params
type VerifyRequest = Request<{ verificationToken: string }>;

// Використовуємо параметризацію типу Request для додавання типу для params
export const verify = async (req: VerifyRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { verificationToken } = req.params;
  
      // Пошук користувача за токеном
      const user = await User.findOne({ verificationToken });
      if (!user) {
        throw HttpError(404, 'User not found');
      }
  
      // Оновлення статусу верифікації користувача
      await User.findByIdAndUpdate(user._id, {
        verify: true,
        verificationToken: null,  // Очищаємо токен після верифікації
      });
  
      // Відправка відповіді
      res.json({
        message: 'Email verify success',
      });
    } catch (error) {
      next(error);  // Передача помилки далі до middleware для обробки помилок
    }
  };