import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// console.clear();

const port = process.env.PORT || 6174;

app.get("/", (req, res) => {
  res.send("Home Page 🤣");
});

app.listen(port, () => console.log(`Server is running on port: ${port}!`));
