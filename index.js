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

// ReGex Pattern:

app.get("/x/", (req, res) => {
  res.send("It will be work when user hit localhost:6174/x/");
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

// multiple CallBacks:

app.get("/api/single-cb", (req, res) => {
  res.send("Single CallBack Function");
});

app.get(
  "/api/multiple-cb",
  (req, res, next) => {
    console.log("First CallBack Function");
    next();
  },
  (req, res, next) => {
    console.log("Second CallBack Function");
    next();
  },
  (req, res) => {
    console.log("Third CallBack Function");
    res.send("Multiple CallBack Functions");
  }
);

const cb1 = (req, res, next) => {
  console.log("First CallBack Function");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second CallBack Function");
  next();
};

const cb3 = (req, res, next) => {
  console.log("Third CallBack Function");
  next();
};

app.get("/api/arrays-cb", [cb1, cb2, cb3], (req, res) => {
  res.send("Arrays of CallBack Functions");
});

// Server Listening:
app.listen(port, () => console.log(`Server is running on port: ${port}!`));
