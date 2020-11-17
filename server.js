const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/db");
const app = express();
const http = require( "http" ).createServer( app );
const io = require( "socket.io" )( http );
const cors = require("cors");
connectDB();

//Declare Middlewares
app.use(express.json({ extended: false }));
app.use(cors());
app.use(function (req, res, next) {
  res.io = io;
  next();
});
//Define routes here
app.use("/api/books", require("./controllers/book"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

io.on('connection',function(socket){  
    console.log("A user is connected");
});

http.listen(PORT, () => console.log(`Listening on port ${PORT}`));



// app.listen(PORT, () => {
//   console.log(PORT)
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
