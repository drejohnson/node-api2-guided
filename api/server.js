const express = require("express");

const hubsRoute = require("../routes/hubs");

const server = express();

server.use(express.json());

server.use("/api/hubs", hubsRoute);

server.use("/", (req, res) =>
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome to the Lambda Hubs API</p>
  `)
);

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

// Export server
module.exports = server;
