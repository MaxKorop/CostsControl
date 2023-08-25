import mongoose, { ObjectId, Schema } from "mongoose";

const groupSchema: Schema = new Schema({
    name: {
        type: String,
        default: "Group"
    },
    expenses: {
        type: Array<ObjectId>
    }
});

export const Group = mongoose.model('groups', groupSchema);