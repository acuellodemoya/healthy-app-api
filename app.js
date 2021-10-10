const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const doctor = require('./routes/doctor');
const paciente = require('./routes/paciente');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/api/doctor', doctor);
app.use('/api/paciente', paciente);


const URI = 'mongodb+srv://root:12345@cluster0.vtpki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected'))
.catch(err => console.log(`Error: \n ${err}`));

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});



