import express from  'express';
import mongoose from 'mongoose';
import dotenv from  'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('MongoDB connected');
}).catch((err)=>{console.error(err)
});
const  app = express();

app.use(express.json());//its for running through  the middleware of json data in request body

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//Path to api

app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

// create middleware

app.use((err,req,res,next)=>{
    const statusCode =err.statusCode || 500;
    const message=err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    });
})


