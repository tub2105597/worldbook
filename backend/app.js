const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('dotenv').config({ path: 'config.env' });

const app = express();

// Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // Use morgan for logging requests in development mode
}
// Use cors to allow cross-origin requests from the client
app.use(
  cors({
    origin: process.env.URL.split(','),
    credentials: true,
  }),
);
console.log(`Allow CORS for: ${process.env.URL.split(',')}`);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

// Routes

// Undefined routes
// app.use('*', (req, res, next ) => {
//     return next (

//     )}
// );

// Handle errors

module.exports = app;
