const express = require("express");
var app = express();
const fs = require("fs");

// *****/middlewares/*****
const time = (req, res, next) => {
    var date = new Date();
    if (date.getDay() >=1 && date.getDay() <= 5 &&  date.getHours() >=9 && date.getHours() <= 17)
        next()
    else
        res.send("<h1>Veuillez retourner penandant les horaires de travail...</h1>");
};
// *****/routes/*****
app.get("/", time, (req, res) => {
    fs.readFile("./index.html", "utf-8", (err, data) => {
        err ? console.log(err) : res.send(data);
    });
});
app.get("/contact", time, (req, res) => {
    fs.readFile("./contact.html", "utf-8", (err, data) => {
        err ? console.log(err) : res.send(data);
    });
});
app.get("/services", time, (req, res) => {
    fs.readFile("./services.html", "utf-8", (err, data) => {
        err ? console.log(err) : res.send(data);
    });
});

app.get("/", (res) => {
    fs.readFile("./index.html", "utf-8", (err, data) => {
        err ? console.log(err) : res.send(data);
    });
});
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`server running on port ${PORT}`)
);
