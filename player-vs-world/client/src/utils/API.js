import axios from "axios";

export default {
  // Gets all Messages
  getMessages: function (userInfo) {
    return axios.post("/api/mail/receiver", userInfo);
  },
  // <------------------------------------>
  // Gets a single message by ID
  getMessage: function (messageId) {
    return axios.put("/api/mail/get", messageId);
  },
  // <------------------------------------>
  //sending a message
  sendMessage: function (message) {
    return axios.post("/api/mail/send", message);
  },
  // <------------------------------------>
  // DELETE route for deleting sent mail
  deleteSent: function (deletes) {
    return axios.put("/api/mail/senderDelete", deletes);
  },
  deleteReciever: function (deletes) {
    return axios.put("/api/mail/receiverDelete", deletes);
  },
  // <------------------------------------>
  //sent mail
  mailSender: function (messages) {
    return axios.put("/api/mail/sender", messages);
  },
  // <------------------------------------>
  // friend routes
  friendAdd: function (friend) {
    return axios.post("/api/users/friendAdd", friend);
  },
  friendFind: function (friend) {
    return axios.post("/api/users/friendFind", { user: friend });
  },
  // <------------------------------------>
  // group routes
  groupAdd: function (group) {
    return axios.post("/api/users/groupAdd", group);
  },
  groupFind: function (groups) {
    return axios.post("/api/users/groupFind", { user: groups });
  },
  // <------------------------------------>
  // game routes
  gamesAdd: function (games) {
    return axios.post("/api/users/gamesAdd", games);
  },
  gamesFind: function (games) {
    return axios.post("/api/users/gamesFind", { user: games });
  },
  // <------------------------------------>
  // blog routes
  blogAdd: function (blogs) {
    return axios.post("/api/blogs/getBlogs", blogs);
  },
  blogFind: function (blogs) {
    return axios.post("/api/blogs/getBlogs", blogs);
  }
};