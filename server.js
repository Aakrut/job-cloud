import express from "express";
const app = express();
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'
import 'express-async-errors'
import morgan from 'morgan'


dotenv.config()

import connectDB from './db/connect.js'

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}
app.use(express.json())


app.use("/api/v1/auth", authRouter);
app.use('/api/v1/jobs',jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;


const start = async () => {
   
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
          console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error)
    }
}

start();