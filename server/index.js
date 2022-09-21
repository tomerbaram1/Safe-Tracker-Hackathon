const connection = require('./db')
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors")
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const bodyParser = require('body-parser');

// database connection
connection()

// middlewares
app.use(express.json())
app.use(cors());





// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


// =====================
// app.use((err, req, res, next) => {
//   console.log(err);
//   next();
// });
// =====================


// =====================
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use(bodyParser.json());
// =====================

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });