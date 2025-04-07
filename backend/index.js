const express = require("express");
const mongoose = require('mongoose');
const { userRouter } = require('./user.js')
const { MONGO_URL } = require("./config.js");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.use('/api', userRouter);

async function main() {
    await mongoose.connect(MONGO_URL);
    app.listen(3000, () => {
        console.log("Server started on port 3000")
    });
}

main()