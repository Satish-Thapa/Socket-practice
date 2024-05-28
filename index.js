const express = require("express")
const app = express()
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")
app.use(cors())

const server = http.createServer(app)
const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
})

io.on("connection", (socket) => {
  console.log(`a user connected ${socket.id}`)
  setInterval(() => {
    socket.broadcast.emit("message_to_client", { message: "hello" })
  }, 5000)

  socket.on("message_from_client", (data) => {
    console.log(data)
  })
})

server.listen(4000, () => {
  console.log("listening on *:4000")
})
