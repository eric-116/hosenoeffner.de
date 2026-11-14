const sound1 = document.getElementById("sound1")
const sound2 = document.getElementById("sound2")
var audio1 = new Audio('../sounds/timgioh_song.mp3')
var audio2 = new Audio('../sounds/derwarsmuusschätt.mp3')
sound1.addEventListener("click", () => {
    if (audio1.paused) {
        audio1.play()
        sound1.value = "Sound1 stoppen"
    }
    else {
        audio1.pause()
        sound1.value = "Sound1 abspielen"
        audio1 = new Audio('../sounds/timgioh_song.mp3')
    }
})
sound2.addEventListener("click", () => {
    if (audio2.paused) {
        audio2.play()
        sound2.value = "Sound2 stoppen"
    }
    else {
        audio2.pause()
        sound2.value = "Sound2 abspielen"
        audio2 = new Audio('../sounds/derwarsmuusschätt.mp3')
    }
})
audio2.addEventListener("ended", () => {
    sound2.value = "Sound2 abspielen"
})
audio1.addEventListener("ended", () => {
    sound1.value = "Sound1 abspielen"
})