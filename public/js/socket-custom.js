var socket = io();

//Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Sarahy',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server', resp);
});

//Escuchar
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});