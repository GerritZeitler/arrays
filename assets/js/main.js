

let adresse = ["Neufahrnerstr", 85716, "Lohhof", "Bayern"]
let besteFreunde = ["Panda", "Natascha", "Marina", "Anya"]
let person = ["Gerrit", "Zeitler", "DG", 35, "Volleyball", "Dachau", "SuperCode"]
console.log(adresse, besteFreunde, person)

let array1 = person.concat(besteFreunde, adresse)
console.log(array1)

console.log(person)

console.log(person.length, besteFreunde.length, adresse.length)

let meinTrainer1 = ["Eric", "Steffen", "Simon", "Ahmed"]
console.log(meinTrainer1)
let meinTrainer2 = new Array("Max", "Steffen", "Simon", "Ahmed")
console.log(meinTrainer2)

let meinTrainer3 = new Array();
meinTrainer3[0] = "Eric"
meinTrainer3[1] = "Steffen"
meinTrainer3[2] = "Simon"
meinTrainer3[3] = "Ahmed"
console.log(meinTrainer3)

let numberArray = [5, 6, 7, 8, 9, 10]
console.log(numberArray)

console.log(numberArray[4])
console.log(numberArray[0])
console.log(numberArray[5])

/* let meinText1 = ["Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag."]
let meinText2 = ["Wie geht es dir heute?"]
let meinText3 = ["Heute ist ein großer Tag für uns"]

let split1 = meinText1.split()
let split2 = meinText1.split("")
let split3 = meinText1.split(" ")

console.log(split1)
console.log(split2)
console.log(split3)
 */

let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"]

let totalSongs = songs.push("Sweet Child O'Mine")

console.log(totalSongs)

let besteFussballerAllerZeiten = ["Messi", "Ronaldo", "Ronaldino", "Maradonna", "Zidane"]

besteFussballerAllerZeiten.push("Kahn", "Neuer", "Egal")
console.log(besteFussballerAllerZeiten)


let heroUndEnemy = [["Batman", "The Joker"], ["Professor X", "Magneto"], ["Thor", "Loki"]]
console.log(heroUndEnemy)

heroUndEnemy.push(["Wolverine", "Sabretooth"], ["Ghost Rider", "Mephisto"])

console.log(heroUndEnemy)

let deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurs", "Quarkkeulchen", "Sauerbraten"]

/* deutscheGerichte.unshift("Schweine Braten", "Germknödel", "Shaurma",)

console.log(deutscheGerichte) */

let nichtGut = deutscheGerichte.shift()

console.log(deutscheGerichte)


let dreiNummern = [23, 54, 75]

dreiNummern.push(13, 21, 69)

console.log(dreiNummern)

dreiNummern.unshift(3, 8, 18, 4, 16)

console.log(dreiNummern)

dreiNummern.pop(2) /* ?????????????? */

console.log(dreiNummern)

dreiNummern.shift()

console.log(dreiNummern)


let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];
let copyImg1 = array.slice(7, 15)
let copyImg2 = array.slice(6, 12)
console.log(array, copyImg1, copyImg2)