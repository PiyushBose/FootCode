const express = require("express");
const mongoose = require('mongoose');
const { userRouter } = require('./user.js')
const { proxyRouter } = require('./proxy.js')
const { MONGO_URL } = require("./config.js");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

const proxy = express();
proxy.use(cors());

app.use('/api', userRouter);

proxy.use("/api/competitions", proxyRouter);

const port = process.env.PORT1 || 3000;
const proxyPort = process.env.PORT2 || 5000;

proxy.listen(proxyPort, () => console.log(`Proxy server started on port ${proxyPort}`));

async function main() {
    await mongoose.connect(MONGO_URL);
    app.listen(port, () => {
        console.log(`Server started on port ${port}`)
    });
}

main()
