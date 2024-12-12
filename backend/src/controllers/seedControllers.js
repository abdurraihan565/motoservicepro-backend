const data = require('../data');
const Customer = require('../Models/customerModel');
const { findWithId } = require('../services/finditem');
//seeding demo
const seedCustomer = async (req, res, next) => {
  try {
    //deteting all exsiting users
    await Customer.deleteMany({});
    // insert new users
    const customerUser = await Customer.insertMany(data.customerUser);

    return res.status(201).json(customerUser);
  } catch (error) {
    next(error);
  }
};

// cerate customer
const handleCreateCustomer = async (req, res, next) => {
  try {
    const { name,email,phone,address} = req.body;
    
    //create customer
    const customer = await Customer.create({
    name:name,
    email:email,
    phone:phone,
    address:address
      
    });
    
    res.status(201).json({ message: 'Customer was created successfully',customer });
    
  } catch (error) {
    next(error);
  }
};
//get all customer data
const handleAllGetCustomer = async ( req , res ) => {
  try {
    const customerData = await Customer.find({})
    if (!customerData) throw createError('404', 'message not found');
    res.status(201).json({ message: 'Customer data find successfully',customerData });
   
  } catch (error) {
    next(error);
  }
};

// update customerbyid
const updateCustomerById = async (req, res, next) => {
  try {
    const customerid = req.params.id;
  
    await findWithId(Customer, customerid);
    const updateOptions = { new: true, runValidators: true, context: 'query' };

    let updates = {};

    if (req.body.name) {
      updates.name = req.body.name;
    }
    if (req.body.email) {
      updates.email = req.body.email;
    }
    if (req.body.phone) {
      updates.phone = req.body.phone;
    }
    if (req.body.address) {
      updates.address = req.body.address;
    }
    

    const updateCustomer = await Customer.findByIdAndUpdate(
      customerid,
      updates,
      updateOptions
    );
    if (!updateCustomer) {
      throw createError(404, 'Customer Data dose not exist with is ID.');
    }
    res.status(201).json({ message: 'Customer data Update successfully',updateCustomer });
   
  } catch (error) {
    next(error);
  }
};

// delete signle user
const deleteCustomerById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const customer = await findWithId(Customer, id );
    await Customer.findByIdAndDelete({
      _id: id,
    });
    res.status(201).json({ message: 'Customer data Deleted successfully',customer });
  } catch (error) {
    next(error);
  }
};

module.exports = {seedCustomer,handleCreateCustomer,handleAllGetCustomer,updateCustomerById,deleteCustomerById};