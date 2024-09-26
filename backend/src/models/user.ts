import { Schema, model, Document, Error, Types  } from 'mongoose';
import Joi from 'joi';
import handleMongooseError from '../helpers/handleMongooseError';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  logoURL: string; // Додаємо поле для аватара
  verificationToken: string; // Додаємо поле для токена підтвердження
  _id: Types.ObjectId;
  verify: boolean; // Необов'язкове поле для підтвердження
  token: string;
}

// Регулярний вираз для перевірки email
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const UserSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: emailRegex,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Set password for user"],
    minlength: 6,
  },
  logoURL: {
    type: String,
  },
  verificationToken: {
    type: String, 
  },
  verify: {
    type: Boolean,
    default: false, 
  },
  token: {
    type: String,
  },
}, {
  toJSON: {
    virtuals: true, // Для підтримки віртуальних полів
  },
});
  // Додаємо метод toJSON, щоб замінити _id на id
  UserSchema.method('toJSON', function() {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

// Обробка помилок MongoDB
UserSchema.post<IUser>('save', function (error: Error, doc: IUser, next: (err?: any) => void) {
    handleMongooseError(error, doc, next);
});

// Створення моделі користувача
export const User = model<IUser>('User', UserSchema);  /// User назва шляху +s

// Валідація реєстрації
export const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(6).required(),
  });
  
  // Валідація логіна
  export const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(6).required(),
  });
  
  // Валідація email для повторної верифікації
  export const emailSchema = Joi.object({
    email: Joi.string().pattern(emailRegex).required(),
  });
  
  // Експорт усіх схем
  export const schemas = {
    registerSchema,
    loginSchema,
    emailSchema,
  };