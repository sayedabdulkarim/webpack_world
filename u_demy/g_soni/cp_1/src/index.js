import _ from "lodash";
console.log("first")

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
    
    const listItemsElem = document.getElementById("list_items")

    listItemsElem.innerHTML = ""
    _.forEach(data, element => {
        const liElem = document.createElement("li");
        liElem.innerHTML = element;
        listItemsElem.appendChild(liElem)
    });
})

// export default handleUpdate