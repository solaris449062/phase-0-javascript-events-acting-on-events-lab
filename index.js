const dodger = document.getElementById("dodger");
let fieldStyle = getComputedStyle(document.getElementById("game"))
let fieldWidth = parseInt(fieldStyle.width.replace("px",""), 10);
let dodgerStyle = getComputedStyle(document.getElementById("dodger"))
let dodgerWidth = parseInt(dodgerStyle.width.replace("px",""), 10);

function moveDodgerLeft() {
    let leftNumber = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumber, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let leftNumber = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumber, 10);
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});
