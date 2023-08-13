import mongoose, { ObjectId, Schema } from "mongoose";

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    moneyAmount: {
        type: Number
    },
    groups: {
        type: Array<ObjectId>
    }
});

export const User = mongoose.model('users', userSchema);