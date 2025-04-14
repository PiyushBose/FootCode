const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const { userRouter } = require('./user.js');
const { MONGO_URL } = require("./config.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', userRouter);

const port = process.env.PORT || 3000;

async function main() {
    await mongoose.connect(MONGO_URL);
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}

main().catch(err => console.error("Failed to start server:", err));
