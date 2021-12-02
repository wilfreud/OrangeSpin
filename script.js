const orangebox = document.getElementById("orangebox");
console.log(orangebox);
const orangeCount = 180;

// orangebox gridding settings
orangebox.style.gridTemplateColumns = "repeat(20, 1fr)";

function orangeCreator(){
    let imgCreate = document.createElement("img");
    imgCreate.src = "orange.svg";
    imgCreate.title = "Click to spin";
    imgCreate.classList.add("orange");
    orangebox.appendChild(imgCreate);

    imgCreate.addEventListener("click", () => {
        imgCreate.classList.add("animate");
        imgCreate.addEventListener("animationend", () => {imgCreate.classList.remove("animate");})
    })
}

for (let index = 0; index < orangeCount; index++) {orangeCreator();}