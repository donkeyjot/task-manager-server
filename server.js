const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require("dotenv").config('.env');

const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Db connection success')
})

const tasksRouter = require('./routes/tasks')
app.use('/tasks', tasksRouter);

app.listen(port, () => {
    // perform a database connection when server starts
    // dbo.connectToServer(function (err) {
    //     if (err) console.error(err);
    //
    // });
    console.log(`Server is running on port: ${port}`);
});
