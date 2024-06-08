import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./config/db.js";
import userRoute from "./src/routes/userRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();
dbConnection();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
