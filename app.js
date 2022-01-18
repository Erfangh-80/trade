import express from "express";

// config to db
import connectionDB from "./config/db.js";

// import Route
import userRoute from "./routes/userRoute.js";
import dayHistoryRoute from "./routes/dayHistoryRoute.js";
import momentHistoryRoute from "./routes/momentHistoryRoute.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// port
const Port = process.env.Port || 3000;

// Connected to dataBase
connectionDB();

//route
app.use('/users', userRoute);
app.use("/dayHistory", dayHistoryRoute);
app.use("/momentHistory", momentHistoryRoute);

app.listen(Port, () => { console.log(`running server https://localhost:${Port}`) });
