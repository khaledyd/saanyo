import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://saanyoapp.netlify.app");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(cookieParser());

app.use(
  cors({
    origin: ["https://saanyoapp.netlify.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

dotenv.config();

mongoose.set("strictQuery", true);
const connect = async () => {
  await mongoose
    .connect(process.env.MONG_URL)
    .then(() => {
      console.log("Connected to DB and ");
    })
    .catch((err) => {
      throw err;
    });
};

//middlewares

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//if (process.env.NODE_ENV === 'production') {
//*Set static folder
//app.use(express.static('client/build'));

//app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
//}

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

connect().then(() => {
  app.listen(8002, () => {
    connect();
    console.log("Connected to Server");
  });
});
