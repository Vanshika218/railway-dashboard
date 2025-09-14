const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // React frontend
    methods: ["GET", "POST"],
  },
});

let trains = [
  { id: "T1", lat: 28.61, lng: 77.23, status: "On Time" },
  { id: "T2", lat: 28.65, lng: 77.28, status: "Delayed" },
];

setInterval(() => {
  trains = trains.map((t) => ({
    ...t,
    lat: t.lat + (Math.random() - 0.5) * 0.01,
    lng: t.lng + (Math.random() - 0.5) * 0.01,
  }));

  io.emit("trainUpdate", trains);
}, 3000);

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  socket.emit("trainUpdate", trains);
});

server.listen(4000, () => {
  console.log("🚂 Mock backend running on http://localhost:4000");
});
