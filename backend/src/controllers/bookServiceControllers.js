const createError = require('http-errors');
const { findWithId } = require('../services/finditem');
const BookService = require('../Models/bookServiceModel');


// cerate book service
const handleCreateBookService = async (req, res, next) => {
  try {
    const {bay,clint,model,technician,servicetype,duration } = req.body;
    
    //create book service
    const bookService = await BookService.create({
        bay:bay,
        clint:clint,
        model:model,
        technician:technician,
        servicetype:servicetype,
        duration:duration
       
    });
    
    res.status(201).json({ message: 'Book Service Data was created successfully',bookService });
    
  } catch (error) {
    next(error);
  }
};

//get all  manageMent Data

const handleAllGetBookService = async ( req , res ) => {
  try {
    const bookService = await BookService.find({})
    if (!bookService) throw createError('404', 'bookService not found');
    res.status(201).json({ message: 'manageMentData data find successfully',bookService });
   
  } catch (error) {
    next(error);
  }
};

module.exports = {
 handleCreateBookService,
 handleAllGetBookService
};