import { Schema, model, Document, Error, Types  } from 'mongoose';
import Joi from 'joi';
import handleMongooseError from '../helpers/handleMongooseError';

export interface ICatalog extends Document {
    name: string;
    _id: Types.ObjectId;
    type: String,
    mainCatalog: string | null;
    owner: Schema.Types.ObjectId;
  }

  const CatalogSchema: Schema<ICatalog> = new Schema({
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    mainCatalog: {
      type: String,
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
CatalogSchema.method('toJSON', function() {
  const { _id, __v, ...object } = this.toObject();
  object.id = _id;
  return object;
});

  CatalogSchema.post<ICatalog>('save', function (error: Error, doc: ICatalog, next: (err?: any) => void) {
    handleMongooseError(error, doc, next);
});

// Створення моделі користувача
export const Catalog = model<ICatalog>('catalog', CatalogSchema);  /// User назва шляху +s

// Валідація додавання
export const addSchema = Joi.object({
    name: Joi.string().required(),
    mainCatalog: Joi.string(),
  });
  

  export const schemas = {
    addSchema,
  };