import { loadHeaderFooter } from "./util.js";
import { makeCharacter } from "./createcharacter.js";


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded and ready for changes");

    loadHeaderFooter()
});

const button = document.getElementById("btn");
button.addEventListener("click", () => makeCharacter());


