import express from 'express';
import connectionDB from './config/db.js';
import userRoute from './routes/userRoute.js';
import dayHistoryRoute from './routes/dayHistoryRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Port = process.env.Port || 3000;
// Connected to dataBase
connectionDB();

//route
app.use('/users', userRoute);
app.use("/dayHistory", dayHistoryRoute)
app.listen(Port, () => { console.log(`running server https://localhost:${Port}`) });
