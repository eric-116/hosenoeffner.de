const submit_btn = document.getElementById("submitCode")
const input_txt = document.getElementById("codeInput")
submit_btn.addEventListener("click", (event) => {
    event.preventDefault()
    if (input_txt.value === "NGA") {
        window.location.href = "./video.html"
    }
    if (input_txt.value === "Hosenöffner") {
        window.location.href = "./hosenöffner.html"
    }
    if (input_txt.value === "timgioh") {
        window.location.href = "./timgioh.html"
    }
})
