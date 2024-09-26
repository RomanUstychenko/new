import { Schema, model, Document, Error, Types  } from 'mongoose';
import Joi from 'joi';
import handleMongooseError from '../helpers/handleMongooseError';

export interface IMainCatalog extends Document {
    name: string;
    _id: Types.ObjectId;
    owner: Schema.Types.ObjectId;
  }

  const MainCatalogSchema: Schema<IMainCatalog> = new Schema({
    name: {
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
MainCatalogSchema.method('toJSON', function() {
  const { _id, __v, ...object } = this.toObject();
  object.id = _id;
  return object;
});

  MainCatalogSchema.post<IMainCatalog>('save', function (error: Error, doc: IMainCatalog, next: (err?: any) => void) {
    handleMongooseError(error, doc, next);
});

// Створення моделі користувача
export const MainCatalog = model<IMainCatalog>('mainCatalog', MainCatalogSchema);  /// User назва шляху +s

// Валідація додавання
export const addSchema = Joi.object({
    name: Joi.string().required(),

  });
  
  
  // Експорт усіх схем
  export const schemas = {
    addSchema,
  };