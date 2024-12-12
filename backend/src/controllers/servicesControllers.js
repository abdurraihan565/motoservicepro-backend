const createError = require('http-errors');
const Service = require('../Models/servicesModel');
const { findWithId } = require('../services/finditem');
// cerate service
const handleCreateServices = async (req, res, next) => {
  try {
    const { name,description,price} = req.body;
    
    //create service
    const services = await Service.create({
    name:name,
    description:description,
    price:price
      
    });
    console.log(services)
    res.status(201).json({ message: 'services was created successfully',services });
    
  } catch (error) {
    next(error);
  }
};

//get all service data

const handleAllGetService = async ( req , res ) => {
  try {
    const serviceData = await Service.find({})
    if (!serviceData) throw createError('404', 'message not found');
    res.status(201).json({ message: 'services data find successfully',serviceData });
   
  } catch (error) {
    next(error);
  }
};

// update servicebyid
const updateServiceById = async (req, res, next) => {
  try {
    const serviceid = req.params.id;
  
    await findWithId(Service, serviceid);
    const updateOptions = { new: true, runValidators: true, context: 'query' };

    let updates = {};

    if (req.body.name) {
      updates.name = req.body.name;
    }
    if (req.body.description) {
      updates.description = req.body.description;
    }
    if (req.body.price) {
      updates.price = req.body.price;
    }
    

    const updateService = await Service.findByIdAndUpdate(
      serviceid,
      updates,
      updateOptions
    );
    if (!updateService) {
      throw createError(404, 'Service Data dose not exist with is ID.');
    }
    res.status(201).json({ message: 'services data Update successfully',updateService });
   
  } catch (error) {
    next(error);
  }
};

// delete signle user
const deleteServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const service = await findWithId(Service, id );
    //const userImagePath = user.image;

   // deleteImage(userImagePath);

    await Service.findByIdAndDelete({
      _id: id,
    });
    res.status(201).json({ message: 'services data Deleted successfully',service });
  } catch (error) {
    next(error);
  }
};



module.exports = {
 handleCreateServices,
 handleAllGetService,
 updateServiceById,
 deleteServiceById
 
};