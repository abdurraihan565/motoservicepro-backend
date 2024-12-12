const createError = require('http-errors');
const { findWithId } = require('../services/finditem');
const ManageMent = require('../Models/ManageMentModel');
// cerate management
const handleCreateManageMent = async (req, res, next) => {
  try {
    const { name, specialization,ModelName,category, ServiceName,description, price, duration,servicetype,bay,InitialStatus} = req.body;
    
    //create management
    const management = await ManageMent.create({
    name:name,
    specialization:specialization,
    ModelName:ModelName,
    category:category,
    ServiceName:ServiceName,
    description:description,
    price:price,
    duration: duration,
    servicetype:servicetype,
    bay:bay,
    InitialStatus:InitialStatus,
    });
    
    res.status(201).json({ message: 'ManageMent Data was created successfully',management });
    
  } catch (error) {
    next(error);
  }
};

//get all  manageMent Data

const handleAllGetManageMent = async ( req , res ) => {
  try {
    const manageMentData = await ManageMent.find({})
    if (!manageMentData) throw createError('404', 'manageMentData not found');
    res.status(201).json({ message: 'manageMentData data find successfully',manageMentData });
   
  } catch (error) {
    next(error);
  }
};

// update managementbyid
const updateManagementById = async (req, res, next) => {
  try {
    const managementid = req.params.id;
  
    await findWithId(ManageMent,managementid);
    const updateOptions = { new: true, runValidators: true, context: 'query' };

    let updates = {};

    if (req.body.name) {
      updates.name = req.body.name;
    }
    if (req.body.specialization) {
      updates.specialization = req.body.specialization;
    }
    if (req.body.ModelName) {
      updates.ModelName = req.body.ModelName;
    }
    if (req.body.category) {
        updates.category = req.body.category;
      }
    if (req.body.ServiceName) {
        updates.ServiceName = req.body.ServiceName;
      }
    if (req.body.description) {
        updates.description = req.body.description;
      }  

    if (req.body.price) {
        updates.price = req.body.price;
      }
    if (req.body.duration) {
        updates.duration = req.body.duration;
      }

    if (req.body.servicetype) {
        updates.servicetype = req.body.servicetype;
      }

    if (req.body.bay) {
        updates.bay = req.body.bay;
      }
    if (req.body.InitialStatus) {
        updates.InitialStatus = req.body.InitialStatus;
      }
    

    const updateManageMent = await ManageMent.findByIdAndUpdate(
      managementid,
      updates,
      updateOptions
    );
    if (!updateManageMent) {
      throw createError(404, 'ManageMent Data dose not exist with is ID.');
    }
    res.status(201).json({ message: 'ManageMent data Update successfully',updateManageMent });
   
  } catch (error) {
    next(error);
  }
};

// delete signle management data
const deleteManageMentById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const management = await findWithId(ManageMent, id );
    await ManageMent.findByIdAndDelete({
      _id: id,
    });
    res.status(201).json({ message: 'MANAGEMENT data Deleted successfully',management });
  } catch (error) {
    next(error);
  }
};



module.exports = {
 handleCreateManageMent,
 handleAllGetManageMent,
 updateManagementById,
 deleteManageMentById
 
};