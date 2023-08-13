import mongoose, { Schema } from "mongoose";

const expenseSchema: Schema = new Schema({
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

export const Expense = mongoose.model('expenses', expenseSchema);