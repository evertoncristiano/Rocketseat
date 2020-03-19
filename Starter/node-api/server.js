const express = require('express');
const cors = require('cors');
require('dotenv/config');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Start app
const app = express();
app.use(express.json());
app.use(cors());

// Connect database
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, 
                    { useNewUrlParser: true, useUnifiedTopology: true }
                );

// require models
requireDir('./src/models');

// routes
app.use('/api', require('./src/routes'));

app.listen(3001);