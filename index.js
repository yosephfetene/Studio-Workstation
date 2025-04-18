// This is a simple drum kit application that plays different sounds when buttons are clicked or keys are pressed.
// The sounds are categorized into two groups: drum sounds and chord sounds.
// The drum sounds are played when the corresponding buttons or keys (W, A, S, D, J, K, L) are pressed.
var numberOfDrumButtons = document.querySelectorAll(".instrument").length;
// The number of buttons with the class "instrument" is stored in the variable numberOfDrumButtons.
// The buttons are selected using querySelectorAll and the length property is used to get the count.
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".instrument")[i].addEventListener("click", gono1);
}
// The for loop iterates through each button and adds an event listener to it.
// The event listener litens for a click event and calls the gono1 function when the button is clicked.
function gono1(event){
    var buttoninnerhtml = this.innerHTML;
    switch (buttoninnerhtml){
        case "W": 
            let sound = new Audio("floor-tom.mp3");
            sound.play();
            break;
        case "A":
            let sound1 = new Audio("tom-2.mp3");
            sound1.play();
            break;
        case "S":
            let sound2 = new Audio("tsnare-drum.mp3");
            sound2.play();
            break;
        case "D":
            let sound3 = new Audio("whoosh-drum.mp3");
            sound3.play();
            break;
        case "J":
            let sound4 = new Audio("tr707-crash-cymbal.mp3");
            sound4.play();
            break;
        case "K":
            let sound5 = new Audio("long-ride-cymbal.mp3");
            sound5.play();
            break;
        case "L":
            let sound6 = new Audio("kick-drum.mp3");
            sound6.play();
            break;
        case "T": 
            let sound7 = new Audio("./CHORDS/160_Cm_LineFlute_01_565.wav");
            sound7.play();
            break;
        case "F":
            let sound8 = new Audio("./CHORDS/Gm_RiseFlute_01_696.wav");
            sound8.play();
            break;
        case "G":
            let sound9 = new Audio("./CHORDS/Low_Shak_D4_348.wav");
            sound9.play();
            break;
        case "H":
            let sound10 = new Audio("./CHORDS/Shinobue_Fall_F5_348.wav");
            sound10.play();
            break;
        case "B":
            let sound11 = new Audio("./CHORDS/Shinobue_Medium_Db6_348.wav");
            sound11.play();
            break;
        case "N":
            let sound12 = new Audio("./CHORDS/Shinobue_Short_C6_348.wav");
            sound12.play();
            break;
        case "M":
            let sound13 = new Audio("./CHORDS/Wood_Flute_Long_G5_348.wav");
            sound13.play();
            break;
        case "U": 
            let sound14 = new Audio("./2CHORDS/A_minor.wav");
            sound14.play();
            break;
        case "I":
            let sound15 = new Audio("./2CHORDS/acoustic-guitar-one-shot-c-chord-strike_C_major.wav");
            sound15.play();
            break;
        case "O":
            let sound16 = new Audio("./2CHORDS/d_major-80593.mp3");
            sound16.play();
            break;
        case "P":
            let sound17 = new Audio("./2CHORDS/e_major-102091.mp3");
            sound17.play();
            break;
        case "X":
            let sound18 = new Audio("./2CHORDS/e-minor_bpm.wav");
            sound18.play();
            break;
        case "C":
            let sound19 = new Audio("./2CHORDS/G_major.wav");
            sound19.play();
            break;
        case "V":
            let sound20 = new Audio("./2CHORDS/major7_G_major.wav");
            sound20.play();
            break;
        case "Q": 
            let sound21 = new Audio("./3CHORDS/Sequence 01_2.mp3");
            sound21.play();
            break;
        case "R":
            let sound22 = new Audio("./3CHORDS/Sequence 02.mp3");
            sound22.play();
            break;
        case "E":
            let sound23 = new Audio("./3CHORDS/Sequence 03.mp3");
            sound23.play();
            break;
        case ";":
            let sound24 = new Audio("./3CHORDS/Sequence 04.mp3");
            sound24.play();
            break;
        case "Z":
            let sound25 = new Audio("./3CHORDS/Sequence 05.mp3");
            sound25.play();
            break;
        case "/":
            let sound26 = new Audio("./3CHORDS/Sequence 333.wav");
            sound26.play();
            break;
        case "Y":
            let sound27 = new Audio("./3CHORDS/Sequence 07.mp3");
            sound27.play();
            break;
    }
}

document.addEventListener('keypress', gono);
// The addEventListener method is used to listen for the 'keypress' event on the document object.
function gono(event) {
    let key = event.key;
    switch (key) {
        case "w":
        case "W":
            let sound = new Audio("floor-tom.mp3");
            sound.play();
            break;
        case "a":
        case "A":
            let sound1 = new Audio("tom-2.mp3");
            sound1.play();
            break;
        case "s":
        case "S":
            let sound2 = new Audio("tsnare-drum.mp3");
            sound2.play();
            break;
        case "d":
        case "D":
            let sound3 = new Audio("whoosh-drum.mp3");
            sound3.play();
            break;
        case "J":
        case "j":
            let sound4 = new Audio("tr707-crash-cymbal.mp3");
            sound4.play();
            break;
        case "k":
        case "K":
            let sound5 = new Audio("long-ride-cymbal.mp3");
            sound5.play();
            break;
        case "L":
        case "l":
            let sound6 = new Audio("kick-drum.mp3");
            sound6.play();
            break;
        case "T":
        case "t": 
                let sound7 = new Audio("./CHORDS/160_Cm_LineFlute_01_565.wav");
                sound7.play();
                break;
        case "F":
        case "f":
                let sound8 = new Audio("./CHORDS/Gm_RiseFlute_01_696.wav");
                sound8.play();
                break;
        case "G":
        case "g":
                let sound9 = new Audio("./CHORDS/Low_Shak_D4_348.wav");
                sound9.play();
                break;
        case "H":
        case "h":
                let sound10 = new Audio("./CHORDS/Shinobue_Fall_F5_348.wav");
                sound10.play();
                break;
        case "B":
        case "b":
                let sound11 = new Audio("./CHORDS/Shinobue_Medium_Db6_348.wav");
                sound11.play();
                break;
        case "N":
        case "n":
                let sound12 = new Audio("./CHORDS/Shinobue_Short_C6_348.wav");
                sound12.play();
                break;
        case "M":
        case "m":
                let sound13 = new Audio("./CHORDS/Wood_Flute_Long_G5_348.wav");
                sound13.play();
                break;
        case "U": 
        case "u":
                let sound14 = new Audio("./2CHORDS/A_minor.wav");
                sound14.play();
                break;
        case "I":
        case "i":
                let sound15 = new Audio("./2CHORDS/acoustic-guitar-one-shot-c-chord-strike_C_major.wav");
                sound15.play();
                break;
        case "O":
        case "o":
                let sound16 = new Audio("./2CHORDS/d_major-80593.mp3");
                sound16.play();
                break;
        case "P":
        case "p":
                let sound17 = new Audio("./2CHORDS/e_major-102091.mp3");
                sound17.play();
                break;
        case "X":
        case "x":
                let sound18 = new Audio("./2CHORDS/e-minor_bpm.wav");
                sound18.play();
                break;
        case "C":
        case "c":
                let sound19 = new Audio("./2CHORDS/G_major.wav");
                sound19.play();
                break;
        case "V":
        case "v":
                let sound20 = new Audio("./2CHORDS/major7_G_major.wav");
                sound20.play();
                break;
        case "Q": 
        case "q":
            let sound21 = new Audio("./3CHORDS/Sequence 01_2.mp3");
            sound21.play();
            break;
        case "R":
        case "r":
            let sound22 = new Audio("./3CHORDS/Sequence 02.mp3");
            sound22.play();
            break;
        case "E":
        case "e":
            let sound23 = new Audio("./3CHORDS/Sequence 03.mp3");
            sound23.play();
            break;
        case ";":
        case ":":
            let sound24 = new Audio("./3CHORDS/Sequence 04.mp3");
            sound24.play();
            break;
        case "Z":
        case "z":
            let sound25 = new Audio("./3CHORDS/Sequence 05.mp3");
            sound25.play();
            break;
        case "/":
            let sound26 = new Audio("./3CHORDS/Sequence 333.wav");
            sound26.play();
            break;
        case "Y":
        case "y":
            let sound27 = new Audio("./3CHORDS/Sequence 07.mp3");
            sound27.play();
            break;
    
    }
}