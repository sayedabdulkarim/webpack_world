import _ from "lodash";
import style from "./style.css"
// import "./style2.css"
import "./clearButton";
import "./logo";

// font
import "./fonts/ComforterBrush-Regular.ttf"

// console.log(style, "first worlldd")

function handleUpdate(){
    const headerEl = document.querySelector(".header")
    headerEl.innerHTML = "Text Updated"
    console.log(headerEl, "clicked")
}
const data = ["one", "two", "three"]

const handleUpdatesss = () => {
    const headerEl = document.querySelector(".header")
    headerEl.innerHTML = "<p>Text Updated</p>"
    
    const listItemsElem = document.getElementById("list_items")

    listItemsElem.innerHTML = ""
    _.forEach(data, element => {
        const liElem = document.createElement("li");
        liElem.innerHTML = element;
        listItemsElem.appendChild(liElem)
    });
    
    // console.log(_, " ____")
}

const btnElem = document.getElementById("btn")
btnElem.addEventListener("click", () => {
    const headerEl = document.querySelector(".header")
    headerEl.innerHTML = "<p>Text Updated</p>"
    
    headerEl.classList.add(style.header)

    const listItemsElem = document.getElementById("list_items")

    listItemsElem.innerHTML = ""
    _.forEach(data, element => {
        const liElem = document.createElement("li");
        liElem.innerHTML = element;
        listItemsElem.appendChild(liElem)
    });
})

btnElem.classList.add(style.button)

// export default handleUpdate