
const classes = [
    { warrior: ["sword", "shield", "axe"] },
    { knight: ["sword", "shield"] },
    { wizard: ["staff", "wand"] },
    { sorcerer: ["lightning", "magic missile"] },
    { rouge: ["dagger", "bow & arrow"] },
    { assassin: ["dagger", "poison"] },
    { bard: ["music", "silver tongue"] },
    { paladin: ["hammer", "mace"] },
    { barbarian: ["fists", "club", "rock"] },
    { fighter: ["fist", "club"] },
    { monk: ["martial art", "Kiriku"] },
    { archer: ["bow & arrow", "knife"] },
    { hunter: ["bow & arrow", "pet", "knife"] },
    { cleric: ["mace", "talisman"] },
    { druid: ["staff", "shapeshift"] }
];

const roles = [
    "warrior",
    "knight",
    "wizard",
    "sorcerer",
    "rouge",
    "assassin",
    "bard",
    "paladin",
    "barbarian",
    "fighter",
    "monk",
    "archer",
    "hunter",
    "cleric",
    "druid",
]

const race = [
    "human",
    "elf",
    "dwarf",
    "halfling",
    "tiefling",
    "dragonkin",
    "gnomes",
    "lizardfolk",
    "goliaths",
]

const weapons = [
    "sword",
    "axe",
    "dagger",
    "bow",
    "staff",
    "sword",
    "mace",
    "spear",
]

const fname = [
    "Sadie",
    "Dominic",
    "Kallie",
    "Anders",
    "Sutton",
    "Thaddeus",
    "Kinsley",
    "Jaiden",
    "Jane",
    "Carl",
    "Heidi",
    "Hayes",
    "Jayda",
    "Drake",
    "Magdalena",
    "Bridger",
    "Phoenix",
    "Kashton",
    "Ember",
    "Westin",
]

const lname = [
    "Mendoza",
    "Knox",
    "Weeks",
    "Campos",
    "Palacios",
    "Collins",
    "Baldwin",
    "Jensen",
    "Esparza",
    "Lara",
    "Harper",
    "Wall",
    "Sparks",
    "Daugherty",
    "Esquivel",
    "Lucas",
    "Doyle",
    "Daniels",
    "Leach",
    "York",
]



export function datalist() {
    const character = {
        classes, fname, lname, roles, race
    }
    return character
}