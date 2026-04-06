const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config(); // load env

const app = express();

// connect database
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
app.use(express.json());

app.use("/api/users", userRoutes);
const recordRoutes = require("./routes/recordRoutes");
app.use("/api/records", recordRoutes);
app.use("/api/users", userRoutes);
app.use("/api/records", recordRoutes);
const dashboardRoutes = require("./routes/dashboardRoutes");
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", userRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);