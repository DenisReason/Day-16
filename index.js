import http from "http";
import express from "express";
import { Server } from "socket.io";
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Sử dụng middleware CORS  
app.use(cors())

app.get('/', (req, res, next) => {
    res.send("Server is running");
});

// Cấu hình Socket.IO để cho phép CORS
io.on("connection", async (socket) => {
    const socketID = socket.id; 
    console.log("Client connected, Socket id: ", socket.id);

    socket.on('message', (data) => {
        console.log("here");
        console.log(data);
    });

    socket.emit("message", { text: "Hello, target client" });
    socket.disconnect()
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
