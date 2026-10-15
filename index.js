require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(express.json());
app.use(cors());
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.send("Node.js Azure Backend Running");
});

app.use("/api/employees", employeeRoutes);
const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server running on ${PORT}`);
// });