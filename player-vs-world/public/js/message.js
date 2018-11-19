$(document).ready(function() {
    var messageContainer = $(".ibox-container");
    var user = "max"
    getMessages()
    function getMessages() {
        const userSend={"receiver": user}
        $.post("/api/mail/receiver", userSend)
        .then(function(messagez){
            console.log(messagez)
            messagez.forEach(function(element) {
                const titleLine = `<tr><td class ="clickable" value = "${element.id}">${element.sender}</td><td class ="clickable" value = "${element.id}" >${element.title}</td><td><center><button >X</button></center></td></tr>`
                $(".messageDump").append(titleLine)
              });
        })
    };
    
})