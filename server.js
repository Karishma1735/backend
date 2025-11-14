import express from "express"
import mongoose from "mongoose"
import userRoutes from './routes/userRoutes.js'
// import bodyParser from 'body-parser'
import cookieParser from "cookie-parser"
import dotenv from 'dotenv'
import { globalErrorHandle } from "./middleware/error.js"
const app = express()
const port = 3000
dotenv.config()
app.use(cookieParser())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

const MONGODB_URI = "mongodb://localhost:27017"

mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));


app.use('/api', userRoutes);
app.use(globalErrorHandle)



app.get('/', (req, res) => {
    res.send("Hello world!!")
})
app.listen(port, () => {
    console.log(`Server is running on port ${port} `);

})

