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
    res.sendFile(path.join(__dirname, '../public/all.html'));
  });

  // add code to send the add.html page, where users can enter new books to the db
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/add.html'));
  });

  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/one.html'));
  });
}