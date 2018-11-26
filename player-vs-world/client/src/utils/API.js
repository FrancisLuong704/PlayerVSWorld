import axios from "axios";

export default {
  // Gets all Messages
  getMessages: (userInfo, token) => {
    console.log(token)
    return axios.post("/api/mail/receiver",userInfo,{ headers :{Authorization: `Bearer ${token}`}});
  },
  // <------------------------------------>
  // Gets a single message by ID
  getMessage: (messageId, token) => {
    return axios.put("/api/mail/get", messageId,{ headers :{Authorization: `Bearer ${token}`}});
  },
  // <------------------------------------>
  //sending a message
  sendMessage: (message, token) => {
    return axios.post("/api/mail/send", message,{ headers :{Authorization: `Bearer ${token}`}});
  },
  // <------------------------------------>
  // DELETE route for deleting sent mail
  deleteSent: (deletes, token) => {
    return axios.put("/api/mail/senderDelete", deletes,{ headers :{Authorization: `Bearer ${token}`}});
  },
  deleteReciever: (deletes, token) => {
    return axios.put("/api/mail/receiverDelete", deletes,{ headers :{Authorization: `Bearer ${token}`}});
  },
  // <------------------------------------>
  //sent mail
  mailSender: (messages, token) => {
    return axios.put("/api/mail/sender", messages,{ headers :{Authorization: `Bearer ${token}`}});
  },
  // <------------------------------------>
  // friend routes
  friendAdd: (friend, token) => {
    return axios.post("/api/users/friendAdd", friend,{ headers :{Authorization: `Bearer ${token}`}});
  },
  friendfind: (friend, token) => {
    console.log( "this is frined ajskdlf;jaskdlf;j ", friend)
    return axios.post("/api/users/friendFind", friend,{ headers :{Authorization: `Bearer ${token}`}});
  },


  // <------------------------------------>
  // group routes
  groupAdd: (group, token) => {
    return axios.post("/api/users/groupAdd", group,{ headers :{Authorization: `Bearer ${token}`}});
  },
  groupFind: (groups, token) => {
    return axios.post("/api/users/groupFind", { user: groups },{ headers :{Authorization: `Bearer ${token}`}});
  },
  // <------------------------------------>
  // game routes
  gamesAdd: (games, token) => {
    return axios.post("/api/users/gamesAdd", games,{ headers :{Authorization: `Bearer ${token}`}});
  },
  gamesFind: (games, token) => {
    return axios.post("/api/users/gamesFind", { user: games },{ headers :{Authorization: `Bearer ${token}`}});
  },
  // <------------------------------------>
  // blog routes
  blogAdd: (blogs, token) => {
    return axios.post("/api/blogs/addBlogs", blogs,{ headers :{Authorization: `Bearer ${token}`}});
  },
  blogFind: (token) => {
    return axios.get("/api/blogs/getBlogs",{ headers :{Authorization: `Bearer ${token}`}});
  },
  // <------------------------------------>
  // make a user route
  newUser: (User, token) => {
    return axios.post("/api/newUser", User,{ headers :{Authorization: `Bearer ${token}`}});
  },
  whoAmI: (token) => {
    return axios.get("/api/me",{ headers :{Authorization: `Bearer ${token}`}});
  }
};