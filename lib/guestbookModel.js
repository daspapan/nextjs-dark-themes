import mongoose from "mongoose";

const guestbookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    comment: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
},{timestamps: true});

export const Guestbook = mongoose.models.guestbooks || mongoose.model('guestbooks', guestbookSchema);

