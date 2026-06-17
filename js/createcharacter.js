import { datalist } from "./listdata.js";
import { randomNumbers, fetchTrueRandomIntegers, getRandomSequence, randomIndices } from "./randata.js";

const data = datalist()

const NameLength = data.fname.length
const RoleLength = data.roles.length
const RaceLength = data.race.length

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
    Weapon.textContent = `Weapons: ${weapons}`
}

function renderStats(str, dex, con, int, wis, cha) {
    const stats = document.querySelector(".stats")
    stats.innerHTML = `
    <ul class="stats2">
        <li class="element" id="strength">Strength: ${str}</li>
        <li class="element" id="dexterity">Dexterity: ${dex}</li>
        <li class="element" id="constitution">Constitution: ${con}</li>
        <li class="element" id="intelligence">Intelligence: ${int}</li>
        <li class="element" id="wisdom">Wisdom: ${wis}</li>
        <li class="element" id="charisma">Charisma: ${cha}</li>
    </ul>`
}

export function makeCharacter() {
    processName()
    ProcessRace()
    ProcessRole()
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
    await getRandomSequence(NameLength - 1);

    const first = data.fname[randomIndices[0]];
    const last = data.lname[randomIndices[1]]
    console.log("fname: ", first)

    renderCharacterName(first, last,)
}

async function ProcessRace() {
    await getRandomSequence(RaceLength - 1);
    const race = data.race[randomIndices[0]]
    renderCharacterRace(race)
}

async function ProcessRole() {
    await getRandomSequence(RoleLength - 1);
    const Roles = data.roles[randomIndices[0]]
    console.log(`random role: ${Roles}`)

    const roleIndex = data.roles.indexOf(`${Roles}`)
    console.log(`roleIndex: ${roleIndex}`)

    const weapons = data.classes[roleIndex][Roles]
    const weaponLength = data.classes[roleIndex][Roles]?.length;

    console.log("test", weaponLength)
    console.log("second test", weapons)

    ProcessWeapons(roleIndex, Roles, weaponLength - 1)
    renderCharacterRole(Roles)
}

async function ProcessWeapons(index, role, leng) {
    await getRandomSequence(leng)
    const weaponClass = data.classes[index][role][randomIndices[0]]
    console.log(weaponClass)

    renderCharacterWeapons(weaponClass)
}