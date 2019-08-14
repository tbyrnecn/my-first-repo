//Practice Functions
//Tom Byrne 13-08-19

const reverseString = (s) =>{
    return s.split("").reverse().join("")
    console.log("HELLO!!!!")
}

const addThreeNumbers = (num1, num2, num3) =>{
    console.log("I am adding your three numbers")
    return num1 + num2 + num3
}

const hello = () =>{
    console.log("HELLO")
}

const displayName = (name) =>{
    console.log(` ${name}`)
}

const displayGreeting = (name) =>{

}

function hello2 (){
    console.log("Hello")
}

hello()
displayName("Tom")
console.log(addThreeNumbers(10,20,30))
console.log("Hello World")
console.log(reverseString("Hello World"))

10
let orderCount = 0; 

const takeOrder = (topping,topping2) => {
  console.log(`Pizza with ${topping} and ${topping2}`);
  orderCount++;
}

takeOrder("pineapple");


