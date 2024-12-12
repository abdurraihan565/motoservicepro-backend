const { Schema, model } = require('mongoose');

const ServiceSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Service Name is Required'],
      trim: true,
      lowercase: true,
     
    },

    description: {
      type: String,
      required: [true, ' Description is Required'],
      trim: true,
      lowercase: true,
    },
    price: {
        type: Number,
        required: [true, ' Price is Required'],
        trim: true,
        lowercase: true,
      },

   
  },
  { timestamps: true }
);

const Service = model('Services', ServiceSchema);
module.exports = Service;