require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./dbconfig/db");
const contact =  require("./routes/contactRoutes")

connectDB();
app.use(cors());
app.use(express.json({
  origin: "http://localhost:3000"
}));

app.use("/api/contacts",contact);

app.listen(5000, () => console.log("Server running on port 5000"));