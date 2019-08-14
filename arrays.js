let drinks = ["Coffee", "Coke", "Fanta", "Tea", "Juice"]
console.log(drinks)
console.log(drinks.length)
let pos = drinks.indexOf("Beer")
console.log(pos)
let drinkCheck = (drink) =>{
    if(drinks.indexOf(drink) != -1){
        console.log(`Yes ${drink} is in the list`)
    }else{
        console.log(`Sorry ${drink} is not in the list`)
    }
}
drinkCheck("Fanta")

