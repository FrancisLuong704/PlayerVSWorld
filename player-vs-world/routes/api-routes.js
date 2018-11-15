// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // Get route for returning posts of a specific category
  app.post("/api/mail/receiver", function (req, res) {
    db.Mail.findAll({
      where: {
        receiver: req.body.receiver,
        recieverDelete: false
      }
    })

      .then(function (dbMessage) {
        console.log(dbMessage)
        res.json(dbMessage)
      })
    })


    // Get route for retrieving a single post
    app.get("/api/posts/:id", function (req, res) {
      db.Mail.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(function (dbPost) {
          res.json(dbPost);
        });
    });

    // POST route for saving a new messages
    app.post("/api/mail/send", function (req, res) {
      console.log(req.body);
      db.Mail.create({
        sender: req.body.sender,
        receiver: req.body.receiver,
        title: req.body.title,
        body: req.body.body
      })
        .then(function (dbPost) {
          res.json(dbPost);
        });
    })


    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function (req, res) {
      db.Mail.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function (dbPost) {
          res.json(dbPost);
        });
    });

    // PUT route for updating posts
    app.put("/api/posts", function (req, res) {
      db.Mail.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })
        .then(function (dbPost) {
          res.json(dbPost);
        });
    });
  };
