const { io } = require("socket.io-client")

const socket = io.connect("http://localhost:4000")

socket.on("message_to_client", (data) => {
  console.log(data)
})

socket.emit("message_from_client", { message: "k cha" })
