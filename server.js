// const express = require('express')
import express from "express"
import mongoose from "mongoose"
import userRoutes from './routes/userRoutes.js'
import bodyParser from 'body-parser'
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const MONGODB_URI = "mongodb://localhost:27017"

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api', userRoutes);


app.get('/', (req, res) => {
    res.send("Hello world!!")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port} `);

})

