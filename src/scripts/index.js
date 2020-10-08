
$(() => {

    // Getting the chat in the chatbox.

    let chat = document.getElementsByClassName("chat")[0];

    // Create a donny chat element.

    let donnyInitChatEl = document.createElement("P");

    // Append an initial string to the donnyInitChatEl.

    let donnyInitMessage = "Greetings. How may I help you?";

    // Add donnyInitMessage to the donnyInitChatEl.

    donnyInitChatEl.textContent = donnyInitMessage;

    // Append the created donny element to the chat.

    chat.append(donnyInitChatEl);


    // When Donny image is clicked, display donny chat box.

    $(".virtual-assistant-image").on("click", () => {
        $(".donny-chatbox").css({ 
            "opacity" : "1.0" ,
            "transition" : "all .1s ease-in-out"
        });
    })

    // When chatbox X is clicked, hide chatbox.

    $(".fa-times").on("click", () => {
        $(".donny-chatbox").css({ 
            "opacity" : "0.0",
            "transition" : "all .1s ease-in-out"
        });
    });



});