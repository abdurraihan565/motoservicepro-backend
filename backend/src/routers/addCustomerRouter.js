const express = require('express');
const { handleCreateCustomer, handleAllGetCustomer, updateCustomerById, deleteCustomerById } = require('../controllers/seedControllers');

const addCustomerRouter = express.Router();

addCustomerRouter.post('/add-customer',handleCreateCustomer);
addCustomerRouter.get(
    '/get-customer',
    handleAllGetCustomer
  );

  addCustomerRouter.put(
    '/:id',
    updateCustomerById
  );
  addCustomerRouter.delete(
    '/:id',
    deleteCustomerById
  );

module.exports = addCustomerRouter;