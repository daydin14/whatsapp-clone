// Dependencies
import express from 'express';

// Models
import dbMessages from '../models/dbMessages.mjs'

// Controller Router
const dbMessagesRouter = express.Router();

// Post new message
dbMessagesRouter.post('/messages/new', async (req, res) => {
    try {
        const dbMessage = req.body;
        const data = await dbMessages.create(dbMessage);
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Sync/Get All Messages
dbMessagesRouter.get('/messages/sync', async (req, res) => {
    try {
        const data = await dbMessages.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

export { dbMessagesRouter as default };