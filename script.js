const orangebox = document.getElementById("orangebox");
const orangeCount = 180;

// orangebox gridding settings
orangebox.style.gridTemplateColumns = "repeat(20, 1fr)";

function orangeCreator(orangeId){
    let imgCreate = document.createElement("img");
    imgCreate.src = "orange.svg";
    imgCreate.title = "Click to spin";
    imgCreate.classList.add("orange");
    orangebox.appendChild(imgCreate);

    if (orangeId === Math.round(orangeCount/2)) {imgCreate.classList.add("triggeredOrange"); imgCreate.title = "Click to spin *";}
    animeIt(imgCreate);

}

function animeIt(itemAnim){
        itemAnim.addEventListener("click", () => {
        itemAnim.classList.add("animate");
        itemAnim.addEventListener("animationend", () => {itemAnim.classList.remove("animate");})
    })
}

for (let index = 0; index < orangeCount; index++) {orangeCreator(index);}

document.querySelector(".triggeredOrange").addEventListener("click", () => {
    let belugaPass = prompt("Enter Secret cheat code: ");
    if (belugaPass === "spinAll") {
        document.querySelectorAll(".orange").forEach(element => {
            element.classList.add("animate")
            element.addEventListener("animationend", () => {element.classList.remove("animate");})
        });
    }
    else{alert("Unknown cheat code");}
})
