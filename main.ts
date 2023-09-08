input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    morse_letter = "" + morse_letter + "."
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    if (morse_letter == "") {
        morse_letter = "" + morse_letter + " / "
        basic.clearScreen()
    } else {
        lista_med_bokstäver = "" + lista_med_bokstäver + morse_letter + " "
        morse_letter = ""
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(lista_med_bokstäver)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    morse_letter = "" + morse_letter + "-"
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString(lista_med_bokstäver)
})
let lista_med_bokstäver = ""
let morse_letter = ""
radio.setGroup(57)
