const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 3000,
  path: '/myapp',
});
console.log('Servidor PeerJS activo');
