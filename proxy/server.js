const express = require("express");
const cors = require('cors');
const { proxyRouter } = require('./proxy.js');

const proxy = express();
proxy.use(cors());

proxy.use("/api/competitions", proxyRouter);

const proxyPort = process.env.PORT || 5000;

proxy.listen(proxyPort, () => {
    console.log(`Proxy server started on port ${proxyPort}`);
});
