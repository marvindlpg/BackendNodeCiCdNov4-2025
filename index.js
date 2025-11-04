const express = require ('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app =  express(); 

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req,res) =>{ 
    res.send('Ejemplo running Nov 4-2025 03:44 Keren Hapuc JOSEPH MARVIN  y ARIANA DE LA PEÑA DIAZ LOS AMO MUCHO'); 
}); 


app.use('/api', apiRouter);



app.listen (3001,'0.0.0.0', () => {
   console.log('Servidor runners');
});

