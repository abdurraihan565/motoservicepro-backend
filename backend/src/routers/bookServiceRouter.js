const express = require('express');
const { handleCreateBookService, handleAllGetBookService } = require('../controllers/bookServiceControllers');


const bookServiceRouter = express.Router();

bookServiceRouter.post(
  '/book-service',
  handleCreateBookService
);
bookServiceRouter.get(
  '/get-book-service',
  handleAllGetBookService
);




module.exports = bookServiceRouter;