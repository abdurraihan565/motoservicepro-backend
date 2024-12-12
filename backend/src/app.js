const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const seedRouter = require('./routers/seedRouter');
const servicesRouter = require('./routers/servicesRouter');
const addCustomerRouter = require('./routers/addCustomerRouter');
const manageMentRouter = require('./routers/manageMentRouter');
const bookServiceRouter = require('./routers/bookServiceRouter');
//
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/seed',seedRouter);
app.use('/api',servicesRouter)
app.use('/api/user',addCustomerRouter)
app.use('/api/data',manageMentRouter)
app.use('/api/list',bookServiceRouter)

app.get('/test', (req, res) => {
  res.status(200).send({
    message: 'api testing is working good',
  });
});

module.exports = app;