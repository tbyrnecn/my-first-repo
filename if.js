//Pratice If Statments
//Tom Byrne 13/08/2019

let weather = "clouds"

if (weather == "sunny"){
    console.log("Better pack the sunscreen")
}else if (weather == "rain"){
    console.log("Better pack the rain stop thing")
}else{
    console.log("Ok have a good day")
}

//Write a program with an age to see if someone is served in a pub
// or not (18 years old)

let legalAge = 18
let customerAge = 50

if(customerAge >= legalAge){
    console.log("Have a drink")
}else{
    console.log("No Beer for you")
}

//Dodgy Stans Niteclub
// Female < 25 Get in for free
// Female > 35 £150
// Male < 25 £10
// Male > 35 £150
// Anyone else £15

let gender = "female"
let age = 19

if(gender == "female" && age < 25){
    console.log("You get in free")
}

//Hello if number = 1 or 2

let num = 1
if(num % 3 == 0 || num % 5 == 0){
    //Num
}

let s = "Hello World"
let s1 = s.split("")
console.log(s1)
let s2 = s1.reverse()
console.log(s2)
let s3 = s2.join("")
console.log(s3)

let reverse = "Hello World".split("").reverse().join("")
console.log(reverse)
