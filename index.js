


const canvas = document.getElementById("canvas");
const reloadButton = document.getElementById("reloadButton");
const userInput = document.getElementById("userInput");
const submitButton = document.getElementById("submitButton");
const unCorectText = document.getElementById("unCorectText")


let text = "";

const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const generateText = () => {
    let textGenetate = "";

    for (let i = 0; i <= 3; i++) {
        textGenetate += String.fromCharCode(randomNumber(65, 90));
        textGenetate += String.fromCharCode(randomNumber(97, 122));
        textGenetate += String.fromCharCode(randomNumber(48, 57));
    }

    return textGenetate;
};

function drawStringOnCanvas(text) {
    let ctx = canvas.getContext("2d"); 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const textColor = ["rgb(0, 0, 0)", "rgb(110, 130, 130)"];

    let letterSpace = 130 / text.length;

    for (let i = 0; i < text.length; i++) {
        const xInitialSpace = 10;
        ctx.font = "20px roboto Mono";
        ctx.fillStyle = textColor[randomNumber(0, 1)];

        ctx.fillText(
            text[i],
            xInitialSpace + i * letterSpace,
            randomNumber(25, 40),
            100
        );
    }
}

const triggerFunction = () => {
    userInput.value = "";
    text = generateText(); // 

    console.log(text);

    text = [...text].sort(() => Math.random() - 0.5).join("");
    drawStringOnCanvas(text);
};

reloadButton.addEventListener("click", triggerFunction);

window.onload = () => triggerFunction();

submitButton.addEventListener("click", () => {
    const userValue = userInput.value; 

    if (userValue === text) {
        alert("success");
    } else {
        alert("incorrect");
       let resultHTML = "";

        for (let i = 0; i < userValue.length; i++) {
            if (!text.includes(userValue[i])) {
                resultHTML += `<span style="color: red;">${userValue[i]}</span>`;
            } else {
                resultHTML += `<span style="color: black;">${userValue[i]}</span>`;
            }
        }

        unCorectText.innerHTML = resultHTML;
        triggerFunction();
    }
});
























