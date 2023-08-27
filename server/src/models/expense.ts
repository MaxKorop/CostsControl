import mongoose, { Schema } from "mongoose";

const expenseSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    type: {
        type: String
    }
});

export const Expense = mongoose.model('expenses', expenseSchema);