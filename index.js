import http from "http";
import express from "express";
import { Server } from "socket.io";
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
    origin:"http://localhost:19006",
    methods:["GET,PUSH"],
    credentials:true
}});

const PORT = process.env.PORT||3000
app.use(cors())

app.get('/', (req, res, next) => {
    res.send("<h1>server is running<h1/>");
});


io.on('connection', (socket)=>{
    console.log("A user Connect!!");
    socket.on("message",(data)=>{
        socket.emit('message',data)
    })
    socket.emit('message',"Hello")
})
server.listen(PORT, () => {
    console.log("Server is listening on port ",PORT);
});
