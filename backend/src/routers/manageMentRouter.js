const express = require('express');
const { handleCreateManageMent, handleAllGetManageMent, updateManagementById, deleteManageMentById } = require('../controllers/managementControllers');

const manageMentRouter = express.Router();

manageMentRouter.post(
  '/management',
  handleCreateManageMent
);
manageMentRouter.get(
  '/get-management',
  handleAllGetManageMent
);

manageMentRouter.put(
  '/:id',
  updateManagementById
);
manageMentRouter.delete(
  '/:id',
  deleteManageMentById
);


module.exports = manageMentRouter;