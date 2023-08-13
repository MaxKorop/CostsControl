import mongoose, { Schema } from "mongoose";

const incomeSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    type: {
        type: String
    }
});

export const Income = mongoose.model('incomes', incomeSchema);