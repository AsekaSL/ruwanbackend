const express = require('express');
const cors = require('cors');
const controller = require('./controller.js');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/link', (req, res) => {
    controller.getLink()
    .then((response) => {
        res.send(response);
    })
    .catch((error) => {
        console.log(error);
    })
});

app.post('/addlink', (req, res) => {
    controller.setLink(req.body)
    .then((response) => {
        res.send(response);
    })
    .catch((error) => {
        console.log(error);
    })
});

app.delete('/deletelink', (req, res) => {
    controller.deleteLink(req.query.id)
        .then(response => {
            res.send(response)
        })
        .catch(error => {
            res.send(error);
        });
});

module.exports = app;