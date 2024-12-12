const { Schema, model } = require('mongoose');

const customerSchema = new Schema(
    {
      name: {
        type: String,
        required: [true, 'Name  is Required'],
        trim: true,
        lowercase: true,
        validator: function (v) {
          return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(v);
        },
       
      },
      email: {
        type: String,
        required: [true, 'Email is Required'],
        trim: true,
        unique: true,
        lowercase: true,
        validator: function (v) {
          return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(v);
        },
        message: 'please inter a valid email',
      },
      phone: {
        type: Number,
        required: [true, 'Number is Required'],
        trim: true,
      },
      address: {
        type: String,
        required: [true, ' Address is Required'],
        trim: true,
      },
    },
    { timestamps: true }
  );
  
  const Customer = model('Customers', customerSchema);
  module.exports = Customer;