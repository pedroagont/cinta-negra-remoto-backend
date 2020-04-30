const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => console.log('Conectado a la BD correctamente', res))
  .catch(err => console.log('Error al conectarme...', err));
