import { Schema, model, Document, Error, Types  } from 'mongoose';
import Joi from 'joi';
import handleMongooseError from '../helpers/handleMongooseError';

export interface IItem extends Document {
    name: string;
    price: string;
    description: string;
    _id: Types.ObjectId;
    type: string;
    catalog: string;
    owner: Schema.Types.ObjectId;
  }

  const ItemSchema: Schema<IItem> = new Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    type: {
      type: String,
      required: true,
    },
    catalog: {
      type: String,
      required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
      },
  }, {
    toJSON: {
      virtuals: true, // Для підтримки віртуальних полів
    },
  });

  // Додаємо метод toJSON, щоб замінити _id на id
ItemSchema.method('toJSON', function() {
  const { _id, __v, ...object } = this.toObject();
  object.id = _id;
  return object;
});

ItemSchema.post<IItem>('save', function (error: Error, doc: IItem, next: (err?: any) => void) {
    handleMongooseError(error, doc, next);
});

// Створення моделі користувача
export const Item = model<IItem>('item', ItemSchema);  /// User назва шляху +s

// Валідація додавання
export const addSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.string().required(),
    description: Joi.string(),
    // catalog: Joi.string().required(),

  });
  
  
  // Експорт усіх схем
  export const schemas = {
    addSchema,
  };