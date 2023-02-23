const express = require('express'); //Importando Express en nuestro app.js

const morgan = require('morgan');

const Routes = require('./routes/users.routes')

const app = express(); // Crear una instancia de express en la variable app

const port = 3000


const requestTime = (req, res, next) => {
   next();
}

app.use(requestTime);
app.use(morgan('tiny'));
app.use(express.json());

app.use(Routes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
});

