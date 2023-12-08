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
    res.send("server is running");
});
server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
