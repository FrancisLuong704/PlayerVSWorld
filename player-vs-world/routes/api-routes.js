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
  app.put("/api/mail/get", passport.authenticate('jwt',{session:false}),( req,res) => {
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
  app.post("/api/mail/send", passport.authenticate('jwt',{session:false}),( req,res) => {

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
  app.put("/api/mail/senderDelete", passport.authenticate('jwt',{session:false}),( req,res) => {
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
  app.put("/api/mail/receiverDelete", passport.authenticate('jwt',{session:false}),( req,res) => {
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
  app.put("/api/mail/sender", passport.authenticate('jwt',{session:false}),( req,res) => {
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



  app.put("/api/mail/senderMessage", passport.authenticate('jwt',{session:false}),( req,res) => {
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
  app.post("/api/users/friendAdd", passport.authenticate('jwt',{session:false}),( req,res) => {
    console.log(req.body);
    db.Profile.create({
      user: req.body.user,
      frien: req.body.frien
    })
      .then(function (dbFriend) {
        res.json(dbFriend);
      });
  });

  //find all friends of a certain user
  app.post("/api/users/friendFind", function (req, res) {
    db.Profile.findAll({
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
  app.post("/api/users/groupAdd", passport.authenticate('jwt',{session:false}),( req,res) => {
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
  app.post("/api/users/groupFind", ( req,res) => {
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
  app.post("/api/users/gamesAdd", passport.authenticate('jwt',{session:false}),( req,res) => {
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
  app.post("/api/users/gamesFind", ( req,res) => {
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
  app.post("/api/blogs/addBlogs", passport.authenticate('jwt',{session:false}),( req,res) => {
    db.Blog.create({
      user: req.body.user,
      title: req.body.title,
      game: req.body.game,
      content: req.body.content
    })
      .then(function (dbBlog) {
        res.json(dbBlog)
      });
  });

  //get all the blogs
  app.get("/api/blogs/getBlogs", ( req,res) => {
    db.Blog.findAll({})
      .then(function (dbBlog) {
        res.json(dbBlog)
      });
  });

  //get specific blog by id
  app.get("/api/blogs/:id", function (req, res) {
    db.Blog.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbBlog) {
        res.json(dbBlog)
      });
  });


  //this finds all blogs by game
  app.get("/api/blogs/blogGame/:game", function (req, res) {
    db.Blog.findAll({
      where: {
        game: req.params.game
      }
    })
      .then(function (dbGame) {
        res.json(dbGame)
      });
  });

  //this finds all blogs by genre
  app.get("/api/blogs/blogGenre/:genre", function (req, res) {
    db.Blog.findAll({
      where: {
        genre: req.params.genre
      }
    })
      .then(function (dbGenre) {
        res.json(dbGenre)
      });
  });

  //post a new comment for a blog
  app.post("/api/blogs/comments", function (req, res) {
    db.Comments.create({
      title: req.body.title,
      comments: req.body.comments,
      sender: req.body.sender
    })
    .then(function (dbComment) {
      res.json(dbComment)
    });
  });

  //get all comments for a blog
  app.get("/api/blogs/getComments", ( req,res) => {
    db.Comments.findAll({
      where: {
        title: req.body.title
      }
    })
      .then(function (dbBlog) {
        res.json(dbBlog)
      });
  });

  //create a user
  app.post("/api/newUser", ( req,res) => {
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

  app.get("/", ( req,res) => {
    res.sendFile(path.join(__dirname, "../public/inbox.html"));
  });

  app.post("/login", (req, res)=> {
    const {email, password } = req.body
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
  app.get('/api/me', passport.authenticate('jwt', { session: false }), (req, res) => res.json(req.user.Username));

  app.post("/api/profile",  passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log("made it")
     db.User.findOne({
          where: {
            Username: req.body.userName
          },
          attributes: ['description', 'photo'],
        })

          .then(function (returned) {

            res.json(returned)
          })
      })
};
