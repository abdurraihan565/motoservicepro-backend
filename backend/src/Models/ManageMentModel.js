const { Schema, model } = require('mongoose');

const ManageMantSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, ' Name is Required'],
      trim: true,
      lowercase: true,
     
    },

    specialization: {
      type: String,
      required: [true, ' specialization is Required'],
      trim: true,
      lowercase: true,
    },

    ModelName: {
        type: String,
        required: [true, ' Model Name is Required'],
        trim: true,
        lowercase: true,
      },

    category: {
        type: String,
        required: [true, ' Catagory is Required'],
        trim: true,
        lowercase: true,
      },
     ServiceName: {
        type: String,
        required: [true, ' Service Name is Required'],
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
      duration: {
        type: Number,
        required: [true, ' Duration is Required'],
        trim: true,
        lowercase: true,
      },
      servicetype: {
        type: String,
        required: [true, ' service type is Required'],
        trim: true,
        lowercase: true,
      },
      bay: {
        type: Number,
        required: [true, ' Bay is Required'],
        trim: true,
        lowercase: true,
      },
      InitialStatus: {
        type: String,
        required: [true, 'InitialStatus is Required'],
        trim: true,
        lowercase: true,
      },
   
  },
  { timestamps: true }
);

const ManageMent = model('ManageMentData', ManageMantSchema);
module.exports = ManageMent;