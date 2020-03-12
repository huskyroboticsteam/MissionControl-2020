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
  if (connection) connection.write(message);
  else console.log("CANNOT WRITE TO ROVER, NO CONNECTION AVAILABLE");
}

export { connection, start, write };
