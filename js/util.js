import { datalist } from "./listdata.js"
import { fetchTrueRandomIntegers } from "./randata.js"




export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.innerHTML = template;

    if (callback) {
        callback(data);
    }
}

export async function loadTemplate(path) {
    const response = await fetch(path);
    const template = await response.text();
    return template;
}

export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate("/public/partial/header.html");
    const footerTemplate = await loadTemplate("/public/partial/footer.html");

    const headerElement = document.querySelector(".headmain");
    const footerElement = document.querySelector(".footermain");

    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
}

export function getstats() {
    const API_KEY = "959c5cba-0250-4962-b98d-e59817c0815d"

    fetchTrueRandomIntegers(API_KEY, 6, 0, 10).then(numbers =>
        console.log(numbers)

    )
}