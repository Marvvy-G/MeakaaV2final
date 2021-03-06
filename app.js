var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(express.static('public'));

app.get("/", function(req, res){
    res.render("homepage.ejs");
});

app.get("/about", function(req, res){
    res.render("about.ejs");
});


app.get("/contact", function(req, res){
    res.render("contact.ejs");
});

app.listen(process.env.PORT);