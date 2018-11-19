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
                const titleLine = `<tr class ="clickable" value = "${element.id}"><td >${element.sender}</td><td>${element.title}</td><td><center><button >X</button></center></td></tr>`
                $(".messageDump").append(titleLine)
              });
        })
    };
    $(document).on("click", ".clickable", function() {
        console.log($(this).value())
      });
    
})