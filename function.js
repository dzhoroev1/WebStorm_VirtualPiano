document.addEventListener("keypress", function (e){
    if(e.key == "a"){
        console.log("The 'A' key is pressed.");
        let audio_A = new Audio("white_keys/A.mp3");
        audio_A.play();
    }
    else if(e.key == "s"){
        console.log("The 'S' key is pressed.");
        let audio_S = new Audio("white_keys/S.mp3");
        audio_S.play();
    }
    else if(e.key == "d"){
        console.log("The 'D' key is pressed.");
        let audio_D = new Audio("white_keys/D.mp3");
        audio_D.play();
    }
    else if(e.key == "f"){
        console.log("The 'F' key is pressed.");
        let audio_F = new Audio("white_keys/F.mp3");
        audio_F.play();
    }
    else if(e.key == "g"){
        console.log("The 'G' key is pressed.");
        let audio_G = new Audio("white_keys/G.mp3");
        audio_G.play();
    }
    else if(e.key == "h"){
        console.log("The 'H' key is pressed.");
        let audio_H = new Audio("white_keys/H.mp3");
        audio_H.play();
    }
    else if(e.key == "j"){
        console.log("The 'J' key is pressed.");
        let audio_J = new Audio("white_keys/J.mp3");
        audio_J.play();
    }

    //black-keys
    else if(e.key == "w"){
        console.log("The 'W' key is pressed.");
        let audio = new Audio("black_keys/W.mp3");
        audio.play();
    }
    else if(e.key == "e"){
        console.log("The 'E' key is pressed.");
        let audio = new Audio("black_keys/E.mp3");
        audio.play();
    }
    else if(e.key == "t"){
        console.log("The 'T' key is pressed.");
        let audio = new Audio("black_keys/T.mp3");
        audio.play();
    }
    else if(e.key == "y"){
        console.log("The 'Y' key is pressed.");
        let audio = new Audio("black_keys/Y.mp3");
        audio.play();
    }
    else if(e.key == "u"){
        console.log("The 'U' key is pressed.");
        let audio = new Audio("black_keys/U.mp3");
        audio.play();
    }
});