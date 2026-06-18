import { getLocalStorage, setLocalStorage } from "./util.js";


export function retrieveCharacterData() {
    let storage = getLocalStorage("character") || [];


    renderCharacterTable(storage)
    console.log(storage)
}

export function clearStorage() {
    let clearArray = []
    setLocalStorage("character", clearArray)
    const container = document.querySelector(".display")
    const message = document.createElement("p")
    message.textContent = "Character Storage has been cleared"
    container.appendChild(message)
    window.location.reload()
}

function renderCharacterTable(data) {

    if (data.length === 0) {
        console.log("storage is empty")
        const contain = document.querySelector(".message")
        const newElement = document.createElement("p")
        newElement.textContent = "Storage is empty"

        contain.appendChild(newElement)

    } else {
        const characters = [];
        let currentCharacter = {};

        //
        data.forEach(item => {
            if (Array.isArray(item)) {
                // 
                const charObj = {};
                item.forEach(stat => {
                    const [key, val] = stat.split(": ");
                    charObj[key.trim()] = val.trim();
                });
                characters.push(charObj);
            } else {
                // 
                const [key, val] = item.split(": ");
                currentCharacter[key.trim()] = val.trim();

                // 
                if (key.trim() === "Charisma") {
                    characters.push(currentCharacter);
                    currentCharacter = {}; // 
                }
            }
        });


        //html render
        characters.forEach((character) => {
            characterLine(character)
        })
    }


}

export function characterLine(arrayList) {


    const displayElement = document.querySelector(".display")
    console.log(arrayList)
    displayElement.innerHTML += `
        <ul>
            <li>Name: ${arrayList.Name}</li>
            <li>Race: ${arrayList.Race}</li>
            <li>Role: ${arrayList.Role}</li>
            <li>Weapon: ${arrayList.Weapons}</li>
            <li>Strength: ${arrayList.Strength}</li>
            <li>Constitution: ${arrayList.Constitution}</li>
            <li>Intelligence: ${arrayList.Intelligence}</li>
            <li>Wisdom: ${arrayList.Wisdom}</li>
            <li>Charisma: ${arrayList.Charisma}</li>
        </ul> `
}

export function characterTemplate2() {

    const displayElement = document.querySelector(".display")
    displayElement.innerHTML = `
    <div class="play">
        <ul class="displayelement">
           
        </ul>
    </div>`

    characterLine()
}

export function characterTemplate(keys, value) {

    const displayElement = document.querySelector(".display")
    displayElement.innerHTML = `
    <div class="play">
        <ul>
            <li>${keys[0]}: ${value[0]}</li>
            <li>${keys[1]}: ${value[1]}</li>
            <li>${keys[2]}: ${value[2]}</li>
            <li>${keys[3]}: ${value[3]}</li>
            <li>${keys[4]}: ${value[4]}</li>
            <li>${keys[5]}: ${value[5]}</li>
            <li>${keys[6]}: ${value[6]}</li>
            <li>${keys[7]}: ${value[7]}</li>
            <li>${keys[8]}: ${value[8]}</li>
            <li>${keys[9]}: ${value[9]}</li>
           
        </ul>
    </div>`
}

export function characterTemplate4(list) {

    const displayElement = document.querySelector(".display")

    displayElement.innerHTML = `
    <div class="play">
        <ul class="displayelement">
           <li></li>
        </ul>
    </div>`


}