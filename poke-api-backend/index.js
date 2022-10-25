const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

const app =express();

// DB
dbConnection();

//Cors
app.use(cors());

app.use( express.static('public'));

//Lectura del body
app.use( express.json());


//Routes
app.use('/api/', require('./routes/pokemon'));


app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
} );