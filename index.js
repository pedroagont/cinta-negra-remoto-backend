require('dotenv').config()
// Obtenemos server y PORT mediante destructuring
// server y PORT vienen del archivo index de la carpeta server
// Nota: no es necesario agregar index al require de server
const { server, PORT } = require('./server');

require('./database');

//Encendemos el servidor
server.listen(PORT, () => console.log(`Example server listening at http://localhost:${PORT}`));
