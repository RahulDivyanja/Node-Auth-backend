import express, { json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser";
import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/auth.route.js'

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json())
app.use(cors())
app.use(cookieParser()); 

app.use('/api/user',authRoutes)


app.listen(port,()=>{
    connectDB()
    console.log(`Server is running on the ${port}`)
})
