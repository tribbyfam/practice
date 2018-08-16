
let gifs = window.data.data;
// let pics = document.querySelector(URL)[0];

//     for (var pic in gifs){
//         console.log()
//     }
// console.log(gifs)
// console.table(gifs)
// console.log(gifs[0].images.original.ul)
document.body.style.backgroundColor = "blue";
document.body.style.color = "white";

let p = document.createElement("p");
let t = document.createTextNode("Text paragraph");
p.appendChild(t);
document.body.appendChild(p);
let btn = document.createElement('button');
let tbtn = document.createTextNode("Click");
btn.appendChild(tbtn);
document.body.appendChild(btn);


let myRul = gifs[Math.floor(Math.random()*25)].images.original.url;

let myImg = document.getElementById("myGif");


myImg.setAttribute("src", myRul);
// myImg.src = myRul;
document.createElement("input");
let myInpt = document.getElementsByTagName("input")
body.appendChild(input);

document.setAttribute("type", myBtn)
let myBtn = document.getElementsByTagName("input");

// document.getElementById("button").addEventListener("click", myRandom);
// function myRandom(){
//     let result = random(myRul);
//     document.getElementById("button").innerHTML = result;   
// }

