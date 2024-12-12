require('dotenv').config();
const serverPort = process.env.SERVER_PORT || 3003;
const MongodbURL = process.env.MONGODB_ATLAS_URL || 'mongodb://localhost:27017/motoservicepro';

module.exports = {
    serverPort,
    MongodbURL,
  };