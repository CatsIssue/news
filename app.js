const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// define paths
const pathForFiles = path.join(__dirname, 'public');
console.log(pathForFiles);

// configure app
app.use(express.static(pathForFiles));
app.use(bodyParser.urlencoded({extended: true}));

// get and post
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});


app.post('/', (req, res) => {
    let firstName = req.body.firstName;
    let secondName = req.body.secondName;
    let email = req.body.email;

    res.write("The First name: " + firstName + ' ' + email);
    res.send();
});

// 6f1aba47aa65038f4c430cc9b8d5685f-us4


app.listen(3000, () => {
    console.log("Fine server. All good");
})