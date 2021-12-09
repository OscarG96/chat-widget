const { io } = require("socket.io-client");


const socket = io('127.0.0.1:3000')


export const handleSubmitMessage = (message) => {
    console.log('handle submit message', message)
    socket.emit('message', { message })
}