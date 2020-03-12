import express from "express";
import cors from "cors";
import * as commandService from "./command";
import expressWs from "express-ws";
import { getData } from "../data";

const appBase = express();
const wsInstance = expressWs(appBase);
const { app } = wsInstance;

app.use(function(req, res, next) {
  cors();
  var data = "";
  req.setEncoding("utf8");
  req.on("data", function(chunk) {
    data += chunk;
  });
  req.on("end", function() {
    req.body = data;
    next();
  });
});

const MC_PORT = 8000;

commandService.start();
let timer; // only support one MC
var env = process.env.NODE_ENV || "development";

app.ws("/info", function(ws) {
  timer = setInterval(function() {
    const packet = getData();
    ws.send(JSON.stringify(packet));
  }, 100); // send data every 100 ms

  ws.on("error", function() {
    console.log("WEBSOCKET ERROR SENDING PACKET");
  });
  ws.on("close", function() {
    clearInterval(timer); // free memory
    console.log("WEBSOCKET CLOSING");
  });
});

app.post("/", function(req, res) {
  commandService.write(JSON.stringify(req.body));
  res.sendStatus(200);
});

const start = async function() {
  app.listen(MC_PORT, function() {
    console.log(
      `Listening for mission control commands (HTTP) on port ${MC_PORT}`
    );
  });
};

export { app, start };
