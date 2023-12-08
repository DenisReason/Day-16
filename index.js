import http from "http";
import express from "express";
import { Server } from "socket.io";
import cors from 'cors';


const data = [
    {Message:"Wellcome"}
]

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
    origin:"http://localhost:19006",
    methods:["GET,POST"],
    credentials:true
}});

const PORT = process.env.PORT||3000
app.use(cors())

app.get('/', (req, res, next) => {
    res.send("<h1>server is running<h1/>");
});


io.on('connection', (socket)=>{
    console.log("A user Connect!!");
    socket.emit('message',data)
    socket.on("message",(dataclient)=>{
        data.push(dataclient)
        console.log("Dataclient:",data);
        socket.emit('message',data)
    })
})
server.listen(PORT, () => {
    console.log("Server is listening on port ",PORT);
});
