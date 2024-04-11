const app = require("express")();
const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

// socket.io server

const io = socket(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");


  // Xử lý tin nhắn từ client
  socket.on("sendMessage", (message) => {
    io.emit("message", message);
  });
  // Xử lý ngắt kết nối của client
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

nextApp.prepare().then(() => {
  app.get("*", (req, res) => {
    return nextHandler(req, res);
  });
  app.post("*", (req, res) => {
    return nextHandler(req, res);
  });
  app.put("*", (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
