import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import voterRoutes from "./routes/voterRoute.js";
import candidateRoutes from "./routes/candidateRoute.js";

//congigure env
dotenv.config();

//rest object

const app = express();

//database config

connectDB();

// middlewares

app.use(express.json());
app.use(morgan("dev"));

//routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/authvoter", voterRoutes);
app.use("/api/v1/authcandidate", candidateRoutes);
//app.use("/api/v1.get")

app.get("/",(req, res) => {
    res.send("<h1>Welcome to the App</h1>");
});

const PORT = process.env.PORT || 8080; 

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});