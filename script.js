document.getElementById("greeting-text-input").onchange = function() {changeGreetingText()}
function changeGreetingText() {
    let greetingTextInput = document.getElementById("greeting-text-input");
    let newGreetingText = document.getElementById("greeting");
    newGreetingText.innerHTML = greetingTextInput.value;
}

document.getElementById("signoff-input").onchange = function() {changeSignoff()}
function changeSignoff() {
    let signoffTextInput = document.getElementById("signoff-input");
    let signoffText = document.getElementById("signoff");
    signoff.innerHTML = signoffTextInput.value;
}

document.getElementsByName("color").onchange = function() {changeColor()}
function changeColor() {
    let colorChoice = document.querySelector('input[name="color"]:checked')?.value;
    let newColor = document.getElementById("design");
    newColor.style.backgroundColor = colorChoice;
    document.getElementById("colornow").innerHTML = `The current color is ${newColor.style.backgroundColor}`
}

document.getElementsByTagName("rgb").onchange = function() {rgbColor()}
function rgbColor() {
    let redChoice = document.getElementById("red-input").value;
    let greenChoice = document.getElementById("green-input").value;
    let blueChoice = document.getElementById("blue-input").value;
    let rgbChoice = `rgb(${redChoice},${greenChoice}, ${blueChoice})`
    let newRGBColor = document.getElementById("design");
    newRGBColor.style.backgroundColor = rgbChoice;
    document.getElementById("colornow").innerHTML = `The current color is ${newRGBColor.style.backgroundColor}`
}


document.getElementById("color-button").onclick = function() {randomColor()}
function randomColor() {
    let randomRed = Math.floor(Math.random()*255)
    let randomGreen = Math.floor(Math.random()*255)
    let randomBlue = Math.floor(Math.random()*255)
    let randomColor = `rgb(${randomRed},${randomGreen},${randomBlue})`
    let newColor = document.getElementById("design");
    newColor.style.backgroundColor = randomColor;
    document.getElementById("colornow").innerHTML = `The current color is ${newColor.style.backgroundColor}`
}