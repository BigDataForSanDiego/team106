const express = require("express");
const csv = require("csvtojson");
const app = express();

app.get('/', function(request, response) {
    response.send('hi');
})

app.get('/csv/', function(request, response) {
    csv().fromFile("./data.csv").then((data) => {
        response.send(data);
    });
});

app.listen(3000);