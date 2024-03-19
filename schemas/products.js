const Joi = require('joi');

const productAddSchema = Joi.object({
  photo: Joi.string().optional().messages({
    'string.base': 'name field should be a string',
  }),
  name: Joi.string().required().messages({
    'string.base': 'name field should be a string',
  }),
  suppliers: Joi.string().required().messages({
    'string.base': 'suppliers field should be a string',
  }),
  stock: Joi.number().integer().required().messages({
    'number.base': 'stock field should be a number',
    'number.integer': 'stock field should be an integer',
  }),
  price: Joi.number().positive().precision(2).required().messages({
    'number.base': 'price field should be a number',
    'number.positive': 'price field should be a positive number',
    'number.precision': 'price field should have no more than 2 decimal places',
  }),
  category: Joi.string()
    .required()
    .valid(
      'Medicine',
      'Head',
      'Hand',
      'Dental Care',
      'Skin Care',
      'Eye Care',
      'Vitamins & Supplements',
      'Orthopedic Products',
      'Baby Care'
    )
    .messages({
      'string.base': 'category field should be a string',
      'any.only': 'category must be one of the allowed categories',
    }),
});

module.exports = {
  productAddSchema,
};
