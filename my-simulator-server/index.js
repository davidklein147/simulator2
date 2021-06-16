const express = require('express');
const port = 8080;

const app = express()
app.listen(port, function () {
    console.log('server is up');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/simulator');

app.use(require('cors')());
app.use(express.json());

app.use('/auth', require('./routers/authRouter'));

app.use('/api', require('./controllers/tokenController'));

app.use('/api/users', require('./routers/userRouter'))
app.use('/api/interns', require('./routers/internRouter'))










