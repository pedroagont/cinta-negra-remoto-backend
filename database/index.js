const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://pedro:abc123def@cluster0-bbobj.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => console.log('Conectado a la BD correctamente', res))
  .catch(err => console.log('Error al conectarme...', err));
