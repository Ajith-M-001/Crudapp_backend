import express from "express";
import connectDB from "./database/db.js";
import userRouter from "./Router/userRouter.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("server started");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on the port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error connecting to mongodb database ${error.message}`);
  }
};

startServer();
