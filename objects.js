// class person {
//     constructor (name, age){
//     this.name = name 
//     this.age = age 
// }

// setName(name){
//     this.name = name 
    
// }
// bio () {
//     return this.descripton()
// }
// descripton(){
//     return this.name + "is " + this.age + "years old."
// }
// }

// let person = new person("Isaac" , 23)
// person.setName = "joy"

// console.log (person.bio())


// // inheritance Parent class
// class person (){
//     constructor (){
//         this.name = name
//         this.age = age 
//     }
//     setName(name) {
//         this.name = name
//     } 
//     bio (){
//         return this.description()

//     }
//     description(){
//         return this.name +"is "+ this.age + "years old"
//     }
// }

// // child class
// class Father extends person{
//     bio(){
//         return super.bio()
//     }
// }

// var Father = new Father ("Isaac", 88)
// console.log (father.name)
// console.log(father.age)



// // new example
// class Cat {
//     constructor(name, breed){
//         this.name = name
//         this.breed = breed 

//     }
//     speak(){
//         console.log('${this.name} make a noise')
//     }
// }

// class Lion extends Cat{
//     speak(){
//         super.speak()
//         console.log(`${this.name} roars`)
//     }
// }

// let l = new Lion("Fuzzy")
// l.speak

// // super class and subclass extending output
// let calcMixIn = Base => class extends Base{
//     cal(){}
// }

// let randomizer = Base => class extends Base{
//     randomize(){}
// }

// class Music{}
// class One extends calcMixIn(randomizer(Music)){}


// function Dog(){}

// Dog.prototype.bark=function(){
//     console.log("woof")
// }
// let fido = new Dog()
// fido.bark()

// function Car(){}
// Car.prototype.drive=function(){
//     console.log("speedy")
// }
// var benz = new Car
// benz.drive

// function Rectungle (width, height){
//     this.width = width;
//     this.height = height;
// }
// let rec = new Rectungle(3.4)

// Rectungle.prototype.area = function(){
//     return this.width * this.height;
// }
// rec.area();

// function Square(length){
//     this.length = this.width = length;
// }
// Square.prototype = Object.create(Rectungle.prototype)

// Square.prototype.diagonal= function(){
//     return Math.sqrt(this.area *2);
// }

let myDiv = document.createElement("div")
let div = document.querySelector("myDiv")

function Person(first, last, age, gender, interests){
    this.name = {
        "first": first,
        "last": last
    }
    this.age = age;
    this.gender =gender;
    this.interests = interests;
    this.bio = function() { 
        return (`${this.name.first} ${this.name.last} `)
    }
}
let personA = new Person("Zombie", "Caraballo", 34, "male", "music",)
let personB = new Person("Zach", "Morris", 18, "male", "tennis")
let personC = new Person("Rod", "Braga", 18, "male", "horses")

li.innerHTML = `
    <strong> First name: </strong>
    <span class="first-name"> ${people[i].firstName} </span><br>
    <strong> Last name: </strong>
    <span class="last-name"> ${people[i].lastName} </span><br>
    <strong> Age: </strong>
    <span class="age"> ${people[i].age} </span>
`
div.appendChild(div)
console.log(personA.age)