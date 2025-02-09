import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoter from "./routes/products.route.js";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use("/api/products", productRoter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Listening on ${PORT}`);
});
