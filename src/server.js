const cors = require('cors');
const express = require('express');
// routers

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
// app.use(/rutas, ruta)


app.get('/',(req, res) => {
    res.json({
        message: "Desafio APIv1"
    })
});

module.exports = app;