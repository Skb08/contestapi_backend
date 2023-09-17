const express=require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./route");

const cors = require("cors");

const app = express();
const PORT =process.env.PORT | 8000;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hi I am live");
});

mongoose
  .connect(process.env.URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));