import axios from "axios";

export default {
  // Gets all Messages
  getMessages: function(userInfo, token) {
    console.log(token)
    return axios.post("/api/mail/receiver",userInfo,{ headers :{Authorization: `Bearer ${token}`}});
  },
  // Gets a single message by ID
  // getMessage: function(messageId) {
  //   return axios.put("/api/mail/get", messageId);
  // },
  //sending a message
  sendMessage: function(message) {
    return axios.post("/api/mail/send", message);
  },
  // DELETE route for deleting sent mail
  deleteSent: function(deletes) {
    return axios.put("/api/mail/senderDelete", deletes);
  },
  deleteReciever: function(deletes) {
    return axios.put("/api/mail/receiverDelete", deletes);
  },
  //sent mail
  mailSender: function(messages) {
    return axios.put("/api/mail/senderMessage", messages);
  },
  friendAdd: function(friend) {
    return axios.post("/api/users/friendAdd", friend);
  },
  friendfind: function(friend) {
    return axios.post("/api/users/friendFind", friend);
  },
  getMessage: token => {
    return fetch('/api/message', {
        headers:{
            "authorization": `Bearer ${token}`
        }
    } )
}
};