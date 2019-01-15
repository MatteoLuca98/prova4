const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/square', function (req,res){
    var result = square(req.query.number);
    res.status(200).send({result : resut});
});

module.exports = app;
