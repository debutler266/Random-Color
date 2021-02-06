//****Logic changed for random generator without button

//Variables

let color = "#";

const colors = [
  0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f' //array for hex colors
]

// const btn = document.getElementById('btn');
const bodyBackground = document.getElementById('body');

const value = document.querySelector('.value');


// The Logic ***Changed fo random compared to main.js file for index.html

(function(){setInterval(getColor, 3000)})(); //running on interval/no stopping

function getColor() {
  color = "#";
  for (let i = 0; i < 6; i++) {  //for loop generating six random letters or numbers from the array. I must be less than i<6. 6 letters & numbers.
    let random = Math.floor(Math.random() * colors.length); //generating & muliplying random number. Using Math.floor makes sure we do not go over 6.

    color += colors[random]; //Once color is generated from for loop, letters/numbers added together to generated a random HEX number
    console.log(color);
    }
    bodyBackground.style.backgroundColor = color;
    value.innerHTML = color;



}
