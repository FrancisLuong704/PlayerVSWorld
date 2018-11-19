// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
const express = require("express");
var path = require("path");
// Routes
// =============================================================
module.exports = function (app) {
  
  app.post("/api/mail/receiver", function (req, res) {
    db.Mail.findAll({
      where: {
        receiver: req.body.receiver,
        recieverDelete: false
      },
      attributes: ['id', 'sender', 'title', 'readed']
    })

      .then(function (dbMessage) {

        res.json(dbMessage)
      })
  })


  // Post route for a single message
  app.put("/api/mail/get", function (req, res) {
    const rec = req.body.receiver
    const id = req.body.id
    db.Mail.update({
      readed: true
    },
      {
        where: {
          id: id
        }
      })
      .then(function (updateinfo) {
        db.Mail.findOne({
          where: {
            id: id
          }

        })

          .then(function (dbMessage) {
            console.log(dbMessage)
            res.json(dbMessage)
          })
      })

  })
//sending a message 
  app.post("/api/mail/send", function (req, res) {

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


  // DELETE route for deleting sent mail
  app.put("/api/mail/senderDelete", function (req, res) {
    db.Mail.update({
      senderDelete: true
    },
      {
        where: {
          id: req.body.id,
          sender: req.body.sender,
        }
      })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });
  // DELETE route for deleting received mail
  app.put("/api/mail/receiverDelete", function (req, res) {
    db.Mail.update({
      recieverDelete: true
    },
      {
        where: {
          id: req.body.id,
          receiver: req.body.receiver,
        }
      })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });
  // PUT route for getting all sent messages
  app.put("/api/mail/sender", function (req, res) {
    db.Mail.findAll({
      where: {
        sender: req.body.sender,
        recieverDelete: false
      },
      attributes: ['id', 'receiver', 'title']
    })

      .then(function (dbMessage) {

        res.json(dbMessage)
      })
  })



  app.put("/api/mail/senderMessage", function (req, res) {
    db.Mail.findOne({
      where: {
        id: req.body.id,
        sender: req.body.sender,
        recieverDelete: false
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  app.post("/api/users/friendAdd", function (req, res) {
    console.log(req.body);
    db.Friend.create({
      user: req.body.user,
      frien: req.body.frien
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  })
  app.post("/api/users/friendFind", function (req, res) {
    db.Friend.findAll({
      where: {
        user: req.body.user,
      },
      attributes: ['frien'],
    })
      .then(function (dbPost) {


        console.log(dbPost)
        res.json(dbPost);
      });
  })
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/inbox.html"));
  });




};
