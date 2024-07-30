const express = require('express');
// const dotenv = require('dotenv');

// dotenv.config();
const PORT = process.env.PORT || 5000;

const chats = require('./data/data');


const app = express();

app.get("/", (req, res) => {
    res.send("API is created");
});

app.get("/api/chats", (req, res) => {
    res.json(chats); 
});

app.get("/api/chats/:id", (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    console.log(singleChat);
    res.send(singleChat);
});

app.listen(PORT, () => {
    console.log("Server Started at Port 5000");
});
