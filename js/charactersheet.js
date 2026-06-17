import { loadHeaderFooter } from "./util.js";
import { makeCharacter } from "./createcharacter.js";
import { characterSave } from "./savecharacter.js";


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded and ready for changes");

    loadHeaderFooter()
});
const checkElement = document.getElementById("strength")
const button = document.getElementById("btn");
button.addEventListener("click", () => makeCharacter());

const savButton = document.getElementById("sav");
savButton.addEventListener("click", () => characterSave());
