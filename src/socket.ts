let socket: WebSocket;

function connect(): void {
    socket = new WebSocket("ws://localhost:3001/");
}

connect();
socket.onerror = connect;

/**
 * Sends the given data over the websocket.
 * 
 * @param data the data to be sent
 */
export default function send(data: string): void {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(data);
    }
}
