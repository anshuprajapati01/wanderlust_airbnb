const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    // Image object ke liye rule (kyunki humne edit wale step me isko object banaya tha)
    image: Joi.object({
      url: Joi.string().allow("", null),
    }).allow("", null),
  }).required(),
});

// NAYA REVIEW SCHEMA ADD KIYA HAI
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
