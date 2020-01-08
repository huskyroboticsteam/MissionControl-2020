import dgram from 'dgram';

const udpServer = dgram.createSocket("udp4");
import {setData} from '../data';

const INBOUND_DATA_PORT = 3000;

udpServer.on("listening", function() {
  console.log(`Listening for telemetry data (UDP) on port ${INBOUND_DATA_PORT}`);
});

udpServer.on("message", function(message) {
  console.log("START");
  const stringifiedMessage = Buffer.from(message).toString();
  console.log(stringifiedMessage);
  try {
    const parsedMessage: DataPacket = JSON.parse(stringifiedMessage);
    console.log("PARSED: " + parsedMessage);
    setData(parsedMessage);
  } catch (e) {
    console.log("DIDN'T PARSE JSON, SKIPPING MESSAGE");
  }
});

udpServer.bind(INBOUND_DATA_PORT);
