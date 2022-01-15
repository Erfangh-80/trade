import express from 'express';
import connectionDB from './config/db.js';
import userRoute from './routes/userRoute.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const Port = process.env.Port || 3000;
// Connected to dataBase
connectionDB();

//route
app.use('/users', userRoute);
app.listen(Port, () => { console.log(`running server https://localhost:${Port}`) });
