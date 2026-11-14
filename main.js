var full_word = "";
var zipper = document.getElementById("zipper");
var slider = document.getElementById("slider");
var isdragging = false;
var played = false;
let pressedKey;
const originalBg = window.getComputedStyle(document.body).backgroundColor;
const min_y = zipper.getBoundingClientRect().top;
const max_y = zipper.getBoundingClientRect().bottom - slider.offsetHeight + 100;
document.addEventListener('keydown', function (event) {
    if (/^[a-zA-Z]$/.test(event.key)) {
        pressedKey = event.key.toUpperCase();
        console.log(pressedKey);
        full_word += pressedKey;
        if (full_word.endsWith("HOSENOEFFNER")) {
            const blinkCount = 10;
            const yellowDuration = 120; // ms
            const redDuration = 120; // ms
            const cycle = yellowDuration + redDuration;
            var audio = new Audio('../sounds/powerstar.mp3');
            audio.play();
            for (let i = 0; i < blinkCount; i++) {
                setTimeout(() => { document.body.style.backgroundColor = "yellow"; }, i * cycle);
                setTimeout(() => { document.body.style.backgroundColor = "red"; }, i * cycle + yellowDuration);
            }
            setTimeout(() => {
                document.body.style.backgroundColor = originalBg;
                full_word = "";
            }, blinkCount * cycle);
        }
    }
    if (full_word.endsWith("MEME")) {
        window.location.href = "./pages/video.html";
    }
});
slider.addEventListener("mousedown", function () {
    isdragging = true;
})

document.addEventListener("mouseup", function () {
    isdragging = false;
})
document.addEventListener("mousemove", function (event) {
    if (isdragging) {
        slider.style.top = event.clientY + "px";

        if (event.clientY < min_y) {
            slider.style.top = min_y + "px";

        }
        if (event.clientY > max_y) {
            slider.style.top = max_y + "px";
            if (!played) {
                audio = new Audio('./sounds/Yayy.mpeg');
                audio.volume = 0.25;
                audio.play();
                played = true;
        
            }
        }
        else {
            played = false;
        }
    }
}) 