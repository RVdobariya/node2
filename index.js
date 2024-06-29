
// const { user } = require('/Users/dreamworld/Desktop/node/schema/userSchema.js');
const mongoose = require('mongoose');
// const socketIO = require('socket.io');
// const http = require('http')
var express = require("express");
var fs = require('fs');

var app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use("/api", require("/Users/dreamworld/Desktop/flutterfire/router.js"))

let port = 8000;

app.listen(port, () => {
  console.log("connect to the " + port);
});

// let server = http.createServer(app);
// var io = socketIO(servers);
// var a = 0

// io.on('connection',
//   (socket) => {
//     console.log('New user connected');
//     //emit message from server to user
//     socket.emit("newMessage", true);
//     // listen for message from user
//     socket.on('createMessage',
//       (newMessage) => {
//         a = a + Number.parseInt(newMessage);

//         console.log('newMessage = ', a);
//       });

//     // when server disconnects from user
//     socket.on('disconnect',
//       () => {
//         console.log('disconnected from user');
//       });
//   });


const mongoURI = 'mongodb+srv://rv_dobariya:kwMszcR7me1z6GAd@cluster0.7b9jcwx.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0'; // Change the URI accordingly
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.error('MongoDB connection error:', err));
