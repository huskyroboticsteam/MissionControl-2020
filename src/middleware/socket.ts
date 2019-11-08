// Courtesy of https://exec64.co.uk/blog/websockets_with_redux/

import { UPDATE_NOMINAL } from "../actions/nominal/types";
import { UPDATE_SENSORS } from "../actions/sensors/types";
import { UPDATE_SENSORSSTATUS } from "../actions/sensorsStatus/types";
import { UPDATE_SERVERSTATUS } from "../actions/serverStatus/types";
import { CLOSE_SOCKET, OPEN_SOCKET } from "../actions/socket/types";
import { SOCKET_URL } from "../api/constants";
import { nominalsMax } from "../utils/nominalValues/nominalsMax";
import { nominalsMin } from "../utils/nominalValues/nominalsMin";
import round from "../utils/round";
import { decimals } from "../utils/round/decimals";

const NUMFAULTSENSORS = 1;
const ERRORTOLERANCE = 5 / 100;
const MAX_UPDATE_TIME = 1500;

let oldTimestamp;
let timestamp;

const checkServerStatus = store => {
  store.dispatch({
    type: UPDATE_SERVERSTATUS,
    payload:
      timestamp !== oldTimestamp &&
      (timestamp - oldTimestamp) / 1000 <= MAX_UPDATE_TIME
  });

  oldTimestamp = timestamp;
};

const socketMiddleware = (() => {
  let socket = null;
  let timer = null;

  const onMessage = (ws, store) => evt => {
    // Parse the JSON message received on the websocket
    const updates = JSON.parse(evt.data);
    const updatedTimestamp = updates.timestamp;
    timestamp = updatedTimestamp;

    if (!timer) {
      oldTimestamp = timestamp;
      timer = setInterval(() => checkServerStatus(store), MAX_UPDATE_TIME);
    }

    // if ('mode' in updates) {
    //   store.dispatch({
    //     type: UPDATE_MODE,
    //     payload: updates.mode
    //   });
    // }

    const sensorsUpdates = updates;

    for (const key in updates)
      if (key in decimals)
        sensorsUpdates[key] = round(updates[key], decimals[key]);

    store.dispatch({
      type: UPDATE_SENSORS,
      payload: sensorsUpdates
    });

    const sensorsUpdatesNominal = {};

    for (const key in updates)
      if (key in nominalsMax && key in nominalsMin) {
        const trueMin = nominalsMin[key] - ERRORTOLERANCE * nominalsMax[key];
        const trueMax = nominalsMax[key] + ERRORTOLERANCE * nominalsMax[key];
        sensorsUpdatesNominal[key] =
          sensorsUpdates[key] <= trueMax && sensorsUpdates[key] >= trueMin;
      }

    store.dispatch({
      type: UPDATE_NOMINAL,
      payload: sensorsUpdatesNominal
    });

    let sensorsStatus = true;
    let faultSensors = 0;
    for (const key in sensorsUpdatesNominal)
      if (!sensorsUpdatesNominal[key]) faultSensors += 1;

    sensorsStatus = !(faultSensors >= NUMFAULTSENSORS);

    store.dispatch({
      type: UPDATE_SENSORSSTATUS,
      payload: sensorsStatus
    });
  };
  return store => next => action => {
    switch (action.type) {
      // The user wants us to connect
      case OPEN_SOCKET:
        // Start a new connection to the server
        if (socket != null) {
          socket.close();
        }

        socket = new WebSocket(`${SOCKET_URL}/info`);
        console.log(`CONNECTING TO: ${SOCKET_URL}/info`);
        socket.onmessage = msg => {
          console.log(msg);
        };
        socket.onmessage = onMessage(socket, store);
        socket.addEventListener("error", _err => {
          console.log("WebSocket error");
        });
        socket.addEventListener("open", () => {
          console.log("WebSocket opened");
        });
        socket.addEventListener("close", () => {
          console.log("WebSocket closed");
        });

        return next(action);

      // The user wants us to disconnect
      case CLOSE_SOCKET:
        if (socket != null) {
          socket.close();
        }
        socket = null;

        return next(action);

      default:
        return next(action);
    }
  };
})();

export default socketMiddleware;
