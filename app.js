const express = require('express');

const app = express();

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