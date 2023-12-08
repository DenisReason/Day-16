import http from "http";
import express from "express";
import { Server } from "socket.io";
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT||3000
app.use(cors())

app.get('/', (req, res, next) => {
    res.send("server is running");
});

server.listen(PORT, () => {
    console.log("Server is listening on port ",PORT);
});
