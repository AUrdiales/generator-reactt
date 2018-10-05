const createServer = require("http").createServer;
const express = require("express");

const app = express();

app.use(express.static("dist"));

const server = createServer(app);

server.listen(3000);
