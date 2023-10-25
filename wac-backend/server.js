// imports
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages';

// app configs
const app = express();
const port = process.env.PORT || 9000;

// middleware
// DB Config
const password = ''
const connection_url = `mongodb+srv://admin:${password}@cluster0.6ldodz3.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// ?????
// API Routes
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;
    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

// Listener
app.listen(port, () => {
    console.log(`Listening on localhost: ${port}`);
})