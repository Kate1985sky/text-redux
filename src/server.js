const express = require("express");
const cors = require("cors");

const app = express();

// // 1. Basic CORS Configuration (Allows All Origins)
// app.use(cors());

// OR

// 2. Specific CORS Configuration (Allow Specific Origins)
app.use(
  cors({
    origin: "*", // Replace with your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Origin",
    ],
  })
);

// Example route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
