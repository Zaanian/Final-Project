import { loadHeaderFooter } from "./util.js";
import { retrieveCharacterData, characterTemplate, clearStorage } from "./retrivecharacter.js";

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded and ready for changes");


    loadHeaderFooter()


    const retrieveButton = document.getElementById("retrive")
    retrieveButton.addEventListener("click", () => retrieveCharacterData())

    const clearButton = document.getElementById("clear")
    clearButton.addEventListener("click", () => clearStorage())


});