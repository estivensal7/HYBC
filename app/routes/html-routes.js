// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

app.get("/",function(req,res){
    res.render("index")
});

app.get("/add",function(req,res){
    res.render("add")
});

app.get("/checkout",function(req,res){
    res.render("checkout")
});

app.get("/contact",function(req,res){
    res.render("contact")
});


app.get("/one",function(req,res){
    res.render("one")
});

app.get("/porfolio",function(req,res){
    res.render("portfolio")
});

app.get("/mens",function(req,res){
    res.render("mens")
});

app.get("/womens",function(req,res){
    res.render("womens")
});

app.get("/all",function(req,res){
    res.render("all")
});

};


 