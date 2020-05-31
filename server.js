const express = require('express')
const path = require("path");
const app=express()


const mongoose = require('mongoose')

mongoose.Promise = global.Promise; //ES6 promise

mongoose.connect("mongodb://localhost:27017/Foodforfoodingle", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("connected");
  })
  .on("error", (error) => {
    console.log("Your error ", error);
  });



  app.use(express.json());

  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.use("/", express.static(path.join(__dirname + "/views")));




  app.use("/api", require("./routes/index"));

app.listen(5555,()=>{
    console.log('server has started')
})