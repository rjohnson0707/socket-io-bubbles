var io = require("socket.io")();

// Listen for new connections from clients
io.on("connection", function (socket) {
  socket.on("add-circle", function (data) {
    io.emit("add-circle", data);
  });
  socket.on("clear", function (data) {
    io.emit("clear", data);
  });
});

module.exports = io;
