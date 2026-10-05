import express, { json } from 'express';

import connectDB from './config/db.js';
import studentRoutes from './routes/studentRoutes.js';


connectDB();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use('/api/students',studentRoutes);

app.listen(port , ()=>{
    console.log("hello from server");
})

