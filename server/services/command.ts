import net, { Socket } from "net";

const OUTBOUND_COMMAND_PORT = 3001;

let connection: Socket;
const start = async function() {
  const tcpServer = new net.Server();
  tcpServer.on("listening", function() {
    console.log(`Waiting for command connection (TCP) on port ${OUTBOUND_COMMAND_PORT}`);
  });
  tcpServer.on("close", function() {
    console.log("TCP command connection closed");
  });
  tcpServer.on("error", function(error) {
    console.log("TCP command server error");
    console.log(error);
  });
  tcpServer.on("connection", function(socket) {
    connection = socket;
    console.log(`TCP command server connected. PORT ${OUTBOUND_COMMAND_PORT}`);
  });
  tcpServer.listen(OUTBOUND_COMMAND_PORT);
};

function write(message) {
  const len = message.length;
  // Little-endian encoding of the length of the message
  const len_buf = Buffer.from([len & 255, (len >> 8) & 255, (len >> 16) & 255, (len >> 24) & 255]);
  const msg_buf = Buffer.from(message);
  if (connection) {
    // Both Buffers *must* be sent in a single call to write(), else they might interleave,
    // which the rover would have no chance of decoding.
    connection.write(Buffer.concat([len_buf, msg_buf]));
  } else {
    console.log("CANNOT WRITE TO ROVER, NO CONNECTION AVAILABLE");
  }
}

export { connection, start, write };
