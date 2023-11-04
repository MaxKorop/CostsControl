import mongoose, { Schema } from "mongoose";
import { IExpense } from "./expense";

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
    expenses: {
        type: Array<IExpense>
    }
});

export const User = mongoose.model('users', userSchema);