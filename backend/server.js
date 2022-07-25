const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/dummyData')

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get("/api/chat", (req, res) => {
    res.send(chats)
});

app.get("/api/chat/:id", (req, res) => {
    const chatById = chats.find((chat) => chat._id === req.params.id);
    res.send(chatById);
})

app.listen(process.env.PORT || 5000, console.log(`server is running on ${process.env.port || 5000}`))