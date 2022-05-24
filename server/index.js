import { createServer } from "http";
import { Server } from "socket.io";
import express from 'express';
import cors from 'cors';


const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: '*' } });


// middleware's
app.use(cors());
app.use(express.static('public'));
app.use('/fav.ico', express.static('public/fav.ico'));


// 1st) 🟩 From server side, 
// socket connection start from here...
// 🙄 all code run inside this function()
// when client hit into this server through URL 🔗 
// then we received realtime connection/disconnection
io.on('connection', (socket) => {

    console.log('Client Open App... ✅');
    console.log(socket.id);


    // event create | & | listener method present at client side
    // Client listen this event by .emit() method... at client side  
    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room);
        callback();
    });


    socket.on('disconnect', () => {
        console.log('Client Close App... ❌');
    })
});



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log('Server is running at port', PORT, '✅');
})


// Default welcome message at root/index page...
const welcomeMessage = (req, res) => {
    res.send(` 
    <head>
        <title>Server Start! ✔</title> 
        <link rel="icon" href="/fav.ico">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

            body {
                text-align            : center;
                background-image      : url('server.gif');
                background-color      : #eee;
                background-repeat     : no-repeat;
                background-attachment : fixed;
                background-position   : center;
            }

            h1{
                width         : max-content;
                margin        : 50px auto 00px; 
                padding       : 20px 30px 24px;
                font-family   : 'Nunito', sans-serif;
                font-size     : 38px;
                color         : #111;
                border        : 1px solid black;
                border-radius : 3px;
            }
            span{
                color : #28b300;
            }

            img{
                width  : 850px;
                height : 850px;
            }
        </style>
    </head>

    <body>
        <h1> Chat App - Server run at port <span>${PORT}</span> </h1>
    </body>
    `).status(200);
}
app.get('/', welcomeMessage);



// const express = require('express');
// // const { Server } = require('socket.io');
// const socket = require('socket.io');
// const http = require('http');