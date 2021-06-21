const express = require('express');
const port = 8080;

const app = express()
app.listen(port, function () {
    console.log('server is up');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://davidklein:z0533170147@cluster0.2q6t2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
//mongoose.connect('mongodb://127.0.0.1:27017/simulator');

app.use(require('cors')());
app.use(express.json({limit:'1000kb'}));


app.use('/auth', require('./routers/authRouter'));

app.use('/api', require('./controllers/tokenController'));

app.use('/api/users', require('./routers/userRouter'))
app.use('/api/interns', require('./routers/internRouter'))
app.use('/api/supervisor', require('./routers/supervisorRouter'))










