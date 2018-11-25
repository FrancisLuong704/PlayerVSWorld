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

  //add friends to a specific user
  app.post("/api/users/friendAdd", function (req, res) {
    console.log(req.body);
    db.Friend.create({
      user: req.body.user,
      frien: req.body.frien
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  //find all friends of a certain user
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
  });

  // add new group to a specific user
  app.post("/api/users/groupAdd", function (req, res) {
    console.log(req.body);
    db.Profile.create({
      user: req.body.user,
      groups: req.body.groups
    })
      .then(function (dbGroup) {
        res.json(dbGroup);
      });
  });

  //find all groups that user is associated with
  app.post("/api/users/groupFind", function (req, res) {
    db.Profile.findAll({
      where: {
        user: req.body.user,
      },
      attributes: ['groups'],
    })
      .then(function (dbGroup) {
        console.log(dbGroup)
        res.json(dbGroup);
      });
  });

  // add new games to user
  app.post("/api/users/gamesAdd", function (req, res) {
    console.log(req.body);
    db.Profile.create({
      user: req.body.user,
      games: req.body.games
    })
      .then(function (dbGames) {
        res.json(dbGames);
      });
  });

  // find all games with certain user
  app.post("/api/users/gamesFind", function (req, res) {
    db.Profile.findAll({
      where: {
        user: req.body.user,
      },
      attributes: ['games'],
    })
      .then(function (dbGames) {
        console.log(dbGames)
        res.json(dbGames);
      });
  });
  
  //post new blogs
  app.post("/api/blogs/addBlogs", function (req, res) {
    db.Blog.create({
      title: req.body.title,
      game: req.body.game,
      content: req.body.content
    })
    .then(function (dbBlog) {
      res.json(dbBlog)
    });
  });

  //get all the blogs
  app.get("/api/blogs/getBlogs", function (req, res) {
    db.Blog.findAll({})
    .then(function (dbBlog) {
      res.json(dbBlog)
    });
  });

  //create a user
  app.post("/api/newUser", function (req, res) {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      Username: req.body.Username,
    })
    .then(function (dbUser) {
      console.log(dbUser)
      res.json(dbUser)
    });
  });

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/inbox.html"));
  });

};
