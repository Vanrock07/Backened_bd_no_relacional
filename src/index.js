//CONFIGURCION DEL SERVIDOR

const express = require('express');
const dbConection = require('../config/db');
const cors = require('cors');
const app = express();

//enlazar la conexion con la base de datos
dbConection();
app.use(cors());

app.use(express.json());
app.use('/api', require('../routes/rutas'));

//ruta principal
app.get('/', (req, res) => {
    res.send("Hello world");
});

//CONFIGURACION PARA SERVIDOR EN LA NUBE || SERVIDOR LOCAL
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto', port);
});


