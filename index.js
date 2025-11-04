const express = require ('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app =  express(); 

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req,res) =>{ 
    res.send('Ejemplo running Nov 3-2025 23:00 JOSEPH MARVIN  y ARIANA DE LA PEÑA DIAZ'); 
}); 


app.use('/api', apiRouter);



app.listen (3001,'0.0.0.0', () => {
   console.log('Servidor runners');
});

