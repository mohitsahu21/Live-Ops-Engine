const express = require('express');
const mongoose = require("mongoose");
const bodyparser = require('body-parser')
const cors = require("cors")
const app = express();
const SERVER_PORT = process.env.PORT || 8080 //means if it is a part of environment file then it will take it from there else by defit will be 8080


//gdEv6O9H5Tfminhe

// const userRoutes = require('./routes/user')
// const offerRoute = require("./routes/offer")

require("./schemas/user-schema")
require("./schemas/offer-schema")
app.use(cors())
// app.use(bodyparser.json());
app.use(express.json());

app.use(require("./routes/user"))
app.use(require("./routes/offer"))




mongoose.connect("mongodb+srv://mohitsahu1993:mohitsahu21@cluster0.datnyml.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("successfully connected to db")
}).catch(()=>console.log("Failed to connect to db"))

// require("./schemas/user-schema")
// require("./schemas/offer-schema")

app.listen(SERVER_PORT,()=>{
    console.log("server started at"+ " " +SERVER_PORT)
})

// app.use("/user",userRoutes);
// app.use("/offer",offerRoute)

