
$(() => {


    // When Donny image is clicked, display donny chat box.

    $(".virtual-assistant-image").on("click", () => {
        $(".donny-chatbox").css({ 
            "display" : "block" 
        });
    })

    // When chatbox X is clicked, hide chatbox.

    $(".fa-times").on("click", () => {
        $(".donny-chatbox").css({ 
            "display" : "none" 
        });
    });



});