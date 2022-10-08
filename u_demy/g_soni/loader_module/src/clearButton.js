import style2 from "./style2.scss"
// console.log(style2, "style 23222222")

const clearBtnElem = document.createElement("button")
clearBtnElem.innerHTML = "CLEAR BUTTON"

// clearBtnElem.classList.add('button')
clearBtnElem.classList.add(style2.button)

clearBtnElem.onclick = () => {
    alert("Clicked Clear testtt")
}

// clearBtnElem.addEventListener("click", () => {
//     alert("Clicked Clear")
// })

document.body.appendChild(clearBtnElem)

