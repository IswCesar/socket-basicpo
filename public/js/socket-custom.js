var socket = io();

// on para escuchar emit para emitir

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Cesar',
    mensaje: 'Hola a todos'
}, function(resp) {
    console.log('Respuesta servidor:', resp);
})

// Recibir-escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})