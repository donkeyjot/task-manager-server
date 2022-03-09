const mongoose = require('mongoose');

const Schema = mongoose.Schema

const taskSchema = new Schema({
        dateToFinish: String,
        title: String,
        content: String,
        isFinished: Boolean
    },
    {timestamps: true}
);

const taskModule = mongoose.model('Task', taskSchema);
module.exports = taskModule;
