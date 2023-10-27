// imports
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.mjs';

// app configs
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());

// DB Config
const dbName = 'WhatsApp-CloneDB';
const password = '';
const connection_url = `mongodb+srv://admin:${password}@cluster0.6ldodz3.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// API Routes
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.post('/messages/new', async (req, res) => {
    try {
        const dbMessage = req.body;
        const data = await Messages.create(dbMessage);
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});



// Listener
app.listen(port, () => {
    console.log(`Listening on localhost: ${port}`);
})
