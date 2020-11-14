const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3002;
const connectDB = require('./config/db');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
connectDB();

app.use(express.json({ extended: false }));

const server = http.createServer(app);
const io = socketIo(server);

//Define routes here
app.use(function(req, res, next){
  res.io = io;
  next();
});
app.use('/api/books', require('./controllers/book'));



// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};


io.sockets.on('connection', function(socket) { 
  console.log("New client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
  // socket.emit("to_react","lez do diz");
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// app.listen(PORT, () => {
//   console.log(PORT)
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });