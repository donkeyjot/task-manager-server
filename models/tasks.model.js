const mongoose = require('mongoose');

const Schema = mongoose.Schema

const taskSchema = new Schema({
        id: {
            type: String,
            required: true,
            unique: true,
        },
        dateCreated: {
            type: Number,
            required: true
        },
        dateToFinish: {
            type: Number
        },
        header: {
            type: String
        },
        content: String,
        isFinished: Boolean
    },
    {timestamps: true}
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
