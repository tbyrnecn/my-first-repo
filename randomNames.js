let names = ["Shannon","Aaron","Lisa","Gary","Enzo","Alex","Tom","Rhys","Yvonne","Lola","Gosia"]

const pickRandom = (i) =>{
    return Math.floor(Math.random()*i)
}

const returnName = (names) =>{
    let randomNumber = pickRandom(names.length)
    let pickedName = names[randomNumber]
    names.splice(randomNumber,1)
    return pickedName
}

console.log("Week 1 - " + returnName(names))
console.log("Week 1 - " + returnName(names))
console.log("Week 1 - " + returnName(names))
console.log("Week 1 - " + returnName(names))

console.log("Week 2 - " + returnName(names))
console.log("Week 2 - " + returnName(names))
console.log("Week 2 - " + returnName(names))
console.log("Week 2 - " + returnName(names))

console.log("Week 3 - " + returnName(names))
console.log("Week 3 - " + returnName(names))
console.log("Week 3 - " + returnName(names))