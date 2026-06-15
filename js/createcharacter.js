import { datalist } from "./listdata.js";
import { randomNumbers, fetchTrueRandomIntegers } from "./randata.js";

const data = datalist()

const NameLength = data.fname.length
const RoleLength = data.roles.length
const RaceLength = data.race.length
//const WeaponLength = data.weapons.length

const API_KEY = "959c5cba-0250-4962-b98d-e59817c0815d"

function renderCharacterName(fname, lname,) {
    const Name = document.getElementById("name")
    Name.textContent = `Name: ${fname} ${lname}`
}
function renderCharacterRace(race) {
    const Race = document.getElementById("race")
    Race.textContent = `Race: ${race}`
}
function renderCharacterRole(roles) {
    const Role = document.getElementById("role")
    Role.textContent = `Role: ${roles}`
}
function renderCharacterWeapons(weapons) {
    const Weapon = document.getElementById("weapons")
    Weapon.textContent = `weapons: ${weapons}`
}
function renderStats(str, dex, con, int, wis, cha) {
    const stats = document.querySelector(".stats")
    stats.innerHTML = `
    <ul class="stats">
            <li class="strength">strength: ${str}</li>
            <li class="dexterity">dexterity: ${dex}</li>
            <li class="constitution">constitution: ${con}</li>
            <li class="intelligence">intelligence: ${int}</li>
            <li class="wisdom">wisdom: ${wis}</li>
            <li class="charisma">charisma: ${cha}</li>
        </ul>`
}

export function makeCharacter() {
    processName()
    ProcessRace()
    ProcessRole()
    //ProcessWeapons()
    processStats()

}

async function processStats() {
    await fetchTrueRandomIntegers(6, 1, 10)

    const strength = randomNumbers[0]
    const dexterity = randomNumbers[1]
    const constitution = randomNumbers[2]
    const intelligence = randomNumbers[3]
    const wisdom = randomNumbers[4]
    const charisma = randomNumbers[5]
    renderStats(strength, dexterity, constitution, intelligence, wisdom, charisma)

}

async function processName() {
    await fetchTrueRandomIntegers(3, 0, NameLength - 1);
    console.log(NameLength)
    const first = data.fname[randomNumbers[0]];
    const last = data.lname[randomNumbers[1]]

    renderCharacterName(first, last,)
}
async function ProcessRace() {
    await fetchTrueRandomIntegers(1, 0, RaceLength - 1);
    const race = data.race[randomNumbers[0]]
    renderCharacterRace(race)
}
async function ProcessRole() {
    await fetchTrueRandomIntegers(1, 0, RoleLength - 1);
    const roles = data.roles[randomNumbers[0]]
    renderCharacterRole(roles)
}
//async function ProcessWeapons() {
// await fetchTrueRandomIntegers(1, 0, WeaponLength - 1);
//const weapons = data.weapons[randomNumbers[0]]
//renderCharacterWeapons(weapons)

//}