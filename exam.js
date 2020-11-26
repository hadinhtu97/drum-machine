let currentSet = 1;
const codeToKey = {
    81: ["Q", "Heater-1", "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", "Chord-1", "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"],
    87: ["W", "Heater-2", "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", "Chord-2", "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"],
    69: ["E", "Heater-3", "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", "Chord-3", "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"],
    65: ["A", "Heater-4", "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", "Shaker", "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"],
    83: ["S", "Clap", "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", "Open-HH", "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"],
    68: ["D", "Open-HH", "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", "Closed-HH", "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"],
    90: ["Z", "Kick-n'-Hat", "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", "Punchy-Kick", "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"],
    88: ["X", "Kick", "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", "Side-Stick", "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"],
    67: ["C", "Closed-HH", "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", "Snare", "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"],
}

const playAudio = code => {
    if (codeToKey.hasOwnProperty(code)) {
        document.getElementById(codeToKey[code][0]).play();
        if (currentSet == 1) {
            document.getElementById('display').innerHTML = codeToKey[code][1];
        } else {
            document.getElementById('display').innerHTML = codeToKey[code][3];
        }
    }
}
document.addEventListener("keydown", event => playAudio(event.keyCode));

const changeSet = () => {
    if (currentSet == 1) {
        for (const key in codeToKey) {
            document.getElementById(codeToKey[key][0]).setAttribute("src", codeToKey[key][4])
        }
        currentSet = 2;
        document.getElementById('show-set').innerHTML = "<strong>Now is set 2</strong>";
        document.getElementById('display').innerHTML = "<strong>Click button or press key</strong>";
    } else {
        for (const key in codeToKey) {
            document.getElementById(codeToKey[key][0]).setAttribute("src", codeToKey[key][2])
        }
        currentSet = 1;
        document.getElementById('show-set').innerHTML = "<strong>Now is set 1</strong>";
        document.getElementById('display').innerHTML = "<strong>Click button or press key</strong>";
    }
}
document.addEventListener("keydown", event => {
    if (event.keyCode == 82) {
        return changeSet();
    }
})