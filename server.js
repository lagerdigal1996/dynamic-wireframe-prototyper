const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

let activeConnections = new Set();

io.on('connection', (socket) => {
    console.log(`New client connected: ${socket.id}`);
    activeConnections.add(socket);

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
        activeConnections.delete(socket);
    });

    socket.on('update_wireframe', (data) => {
        socket.broadcast.emit('wireframe_updated', data);
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));