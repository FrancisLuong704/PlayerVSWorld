// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
const db = require("../models");
const express = require("express");
const path = require("path");
const jwt = require('jsonwebtoken')
const passport = require("../utils/passport")
// Routes
// =============================================================
module.exports = function (app) {
  
  app.post("/api/mail/receiver", passport.authenticate('jwt',{session:false}),( req,res) => {
    console.log(req.body)
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
    console.log("made it")
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

  app.post("/login", (req, res)=> {
    const {email, password } =req.body
    db.User.findOne({
      where: {
      email
    }
    })
    .then(user => {
  
      if (!user) {
        return res.status(401).json({success: false, msg: "Authentication failed."})
      }
      
      if (password === user.password){
        console.log(process.env.SECRET)
        const token = jwt.sign(user.toJSON(),  process.env.SECRET);
          res.json({success: true, token: 'JWT ' + token})
      }
      else {
        res.status(401).send({success: false, msg: "Authentication failed. Wrong password"})
       }
    })
    .catch(err => console.log(err))
  })
  app.get("/api/test", passport.authenticate('jwt',{session:false}),( req,res)=>{
    res.send("It's working!!")
  })
  app.get("/api/message", passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ message: "Hello world" });
  })
};
