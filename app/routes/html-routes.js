// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // add code to send the view.html file
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // add code to send the add.html page, where users can enter new books to the db
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/add.html'));
  });

  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/portfolio.html'));
  });

  app.get("/mens", function(req, res) {
  res.sendFile(path.join(__dirname, '../public/mens.html'));
  });

  app.get("/womens", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/womens.html'));
  });

  app.get("/contact-us", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/contact.html'));
  });
  
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/one.html'));
  });

  app.get("/checkout", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/checkout.html'));
  });
}