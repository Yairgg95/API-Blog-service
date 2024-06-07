require('dotenv').config();

const server = require('./src/server');
const db = require('./src/lib/db');
const PORT = process.env.PORT || 8080;

