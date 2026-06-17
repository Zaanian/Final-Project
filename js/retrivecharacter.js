import { getLocalStorage } from "./util.js";


export function retrieveCharacterData() {
    let storage = getLocalStorage("character") || [];
    //characterTemplate(storage)
    
    renderCharacterTable(storage)
    console.log(storage)
}

function renderCharacterTable(data) {
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
            // Process the flat elements at the beginning of the main array
            const [key, val] = item.split(": ");
            currentCharacter[key.trim()] = val.trim();

            // 
            if (key.trim() === "Charisma") {
                characters.push(currentCharacter);
                currentCharacter = {}; // 
            }
        }
    });


    // 2. Build the HTML Table



}

export function characterLine(key, value) {

    const displayElement = document.querySelector(".display")
    displayElement.innerHTML = `
    <li>here</li>`
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