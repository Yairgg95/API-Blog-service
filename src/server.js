const cors = require('cors');
const express = require('express');

// routers
const authRouter = require('./routes/auth.router');
const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// app.use(/rutas, ruta)
app.use('/auth', authRouter);
app.use('/user', usersRouter);
app.use('/posts', postsRouter);


app.get('/',(req, res) => {
    res.json({
        message: "Desafio APIv1"
    })
});

module.exports = app;