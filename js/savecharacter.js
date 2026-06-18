
import { setLocalStorage, getLocalStorage } from "./util.js"



let saveArray = []

function saveCharacter() {

}

export function characterSave() {
    if (document.getElementById("strength")) {

        const savedCharacters = getLocalStorage("character") || []
        const elementList = document.querySelectorAll(".element")
        const arraySheet = Array.from(elementList, element => element.textContent)

        savedCharacters.push(arraySheet)

        setLocalStorage("character", savedCharacters)
        const contain = document.getElementById("messge")
        const messageElement = document.createElement("p")
        messageElement.textContent = "Character saved successfully!"

        contain.appendChild(messageElement)



    } else {
        console.log("ID does not exist.")
    }
}