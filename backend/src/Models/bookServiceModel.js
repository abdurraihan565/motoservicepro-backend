const { Schema, model } = require('mongoose');

const BookServiceSchema = new Schema(
  {
    bay: {
      type: Number,
      required: [true, ' Bay is Required'],
      trim: true,
      lowercase: true,
     
    },

    clint: {
      type: String,
      required: [true, 'clint is Required'],
      trim: true,
      lowercase: true,
    },
    model: {
        type: String,
        required: [true, ' Model Name is Required'],
        trim: true,
        lowercase: true,
      },
   
    technician: {
        type: String,
        required: [true, ' Model Name is Required'],
        trim: true,
        lowercase: true,
      },
      servicetype: {
        type: String,
        required: [true, ' service Name is Required'],
        trim: true,
        lowercase: true,
      },
      duration: {
        type: Number,
        required: [true, ' Duration Name is Required'],
        trim: true,
        lowercase: true,
      },
    
  },
  { timestamps: true }
);

const BookService = model('Book-Services',BookServiceSchema);
module.exports = BookService;