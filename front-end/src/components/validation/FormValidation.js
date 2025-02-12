import Joi from "joi";

export const schema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Product Name is required",
    "string.min": "Product name should have a minimum length of 3",
    "string.max": "Product name should have a maximum length of 30",
  }),
  price: Joi.number().min(0).required().messages({
    "number.min": "Please enter a valid price value for the product",
    "number.base": "Price should be a number",
  }),
  description: Joi.string().required().messages({
    "string.empty": "Product description is required",
  }),
  image: Joi.string().uri().required().messages({
    "string.empty": "Please enter a valid image URL",
    "string.uri": "Please enter a valid image URL",
  }),
});
