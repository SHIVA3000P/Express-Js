import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// console.clear();

const port = process.env.PORT || 6174;

app.get("/", (req, res) => {
  res.send("Home Page 🤣");
});

// string Pattern:

app.get("/ab?cd", (req, res) => {
  res.send(
    "It will be work when user hit localhost:6174/abcd or localhost:6174/acd"
  );
});

// Advanced Routing:

app.get("/api/home", (req, res) => {
  res.send("<h2>Home Page🏠</h2>");
});

app.post("/api/users", (req, res) => {
  res.send("<h2>User Acount Was Created.</h2>");
});

app.put("/api/users", (req, res) => {
  res.send("<h2>User Details Was Updated Completely.</h2>");
});

app.patch("/api/users", (req, res) => {
  res.send("<h2>User Email is Updated .</h2>");
});

app.delete("/api/users", (req, res) => {
  res.send("<h2>User Acount Was Deleted SuccessFully.</h2>");
});

app.listen(port, () => console.log(`Server is running on port: ${port}!`));
