const express = require('express');
const { handleCreateServices, handleAllGetService, updateServiceById, deleteServiceById } = require('../controllers/servicesControllers');

const servicesRouter = express.Router();

servicesRouter.post(
  '/service',
 handleCreateServices
);
servicesRouter.get(
  '/get-service',
 handleAllGetService
);

servicesRouter.put(
  '/:id',
  updateServiceById
);
servicesRouter.delete(
  '/:id',
  deleteServiceById
);


module.exports = servicesRouter;