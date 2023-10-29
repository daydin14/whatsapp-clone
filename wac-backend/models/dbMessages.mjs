import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

const Message = mongoose.model('messagecontents', whatsappSchema);

export { Message as default };