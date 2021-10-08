const express = require('express');
const mongoose = require('mongoose');

const app = express();

const URI = 'mongodb+srv://root:12345@cluster0.vtpki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected'))
.catch(err => console.log(`Error: \n ${err}`));


app.get('/', (req, res) => {
    console.log('Hello, world!');
    res.json({
        message: 'Hello, World!'
    });
});

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});