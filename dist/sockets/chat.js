"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerChatHandlers;
function registerChatHandlers(io, socket) {
    socket.on('joinRoom', ({ room, username }) => {
        socket.join(room);
        socket.to(room).emit('chatMessage', `${username} joined the game.`);
    });
    socket.on('chatMessage', ({ room, username, message }) => {
        io.to(room).emit('chatMessage', `${username}: ${message}`);
    });
    socket.on('disconnecting', () => {
        const rooms = [...socket.rooms].filter(r => r !== socket.id);
        rooms.forEach(room => {
            socket.to(room).emit('chatMessage', `A player has left the game.`);
        });
    });
}
