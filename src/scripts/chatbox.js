
$(() => {

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


    let chatArray = [];

    // Get the chat div.
    let chat = document.getElementsByClassName("chat")[0];
    // Get the textarea.
    let textarea = document.getElementsByClassName("textarea")[0];

    // Create a donny chat element.
    let donnyInitChatEl = document.createElement("P");

    // Create an initial string.
    let donnyInitMessage = "Greetings. How may I help you?";
    

    // Bind donnyInitMessage string to the donnyInitChatEl.
    donnyInitChatEl.textContent = donnyInitMessage;
    

    // Append the created donny element to the chat.
    chat.append(donnyInitChatEl);

    // function for when send button is pressed.
    const sendButtonPressed = () => {

        console.log("Message Sent");
        // Create user chat element.
        let userResponseEl = document.createElement("P");
        
        // User response string is the textarea textContent.
        let userResponse = textarea.value;
        console.log(userResponseEl);

        // Bind userResponse to userResponseEl.
        userResponseEl.textContent = userResponse;
        chat.append(userResponseEl);
        
    }

    // Get the send button.
    let sendButton = document.querySelector(".chatbox-text-area button");

    // Event listener for send button. Call sendButtonPressed().
    sendButton.addEventListener("click", sendButtonPressed, false);

    // Push the chat to the chat array.
    chatArray.push(chat);

});