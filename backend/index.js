const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const castRouter = require('./routes/cats')

dotenv.config();

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, 
    () => console.log('database is running...'));

    app.use(express.json());
    app.use(cors ());
    app.use('/cats', castRouter);
    app.listen(4000, () => console.log('express is running...'));