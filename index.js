const express = require ('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app =  express(); 

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req,res) =>{ 
    res.send('Ejemplo JOSE MARIN,ARIANA, KEREN Nov 5-2025 16:01'); 
}); 


app.use('/api', apiRouter);



app.listen (3001,'0.0.0.0', () => {
   console.log('Servidor runners');
});

