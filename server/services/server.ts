import express from "express";
import cors from "cors";
import * as commandService from "./command";
import expressWs from "express-ws";
import { getData } from "../data";

const appBase = express();
const wsInstance = expressWs(appBase);
const { app } = wsInstance;

app.use(cors());

const MC_PORT = 8000;

commandService.start();
let timer; // only support one MC
var env = process.env.NODE_ENV || "development";

app.ws("/info", function(ws) {
  timer = setInterval(function() {
    if (env === 'development') {
      console.log(`${new Date().toUTCString()} SENDING DATA TO MC`);
    }
    const packet = getData();
    ws.send(JSON.stringify(packet));
  }, 100) // send data every 100 ms
  
  ws.on("error", function() {
    console.log("WEBSOCKET ERROR SENDING PACKET");
  });
  ws.on("close", function() {
    clearInterval(timer); // free memory
    console.log("WEBSOCKET CLOSING");
  });
});

app.post("/", function(req, res) {
  commandService.write(JSON.stringify(req.query));
  res.sendStatus(200);
});

const start = async function() {
  app.listen(MC_PORT, function() {
    console.log(`Listening for mission control commands (HTTP) on port ${MC_PORT}`);
  });
};

export { app, start };
