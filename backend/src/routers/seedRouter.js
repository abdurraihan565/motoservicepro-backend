const express = require('express');
const { seedCustomer,  } = require('../controllers/seedControllers');

const seedRouter = express.Router();

seedRouter.get('/customer',seedCustomer);


module.exports = seedRouter;