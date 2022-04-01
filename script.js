'use strict';

let guess = document.querySelector('#guess').value;
let score = 20
const number = document.querySelector('.number');
const check = document.querySelector('#check');
const again = document.querySelector('#again');
let highScore = 0

function setMessage(message){
    document.querySelector('#message').textContent = message
}

let secretNumber = Math.trunc(Math.random()* 20) +1
console.log(secretNumber)


check.addEventListener('click', ()=>{
    const guess = Number(document.querySelector('#guess').value);
    if(score > 0){
        if(!guess){

            setMessage("no number")
        }else if(guess === secretNumber){
            setMessage("Correct number!")
            
            document.querySelector('#score').textContent = score
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem'
            number.textContent = secretNumber
            //localStorage.setItem("points", score)
            if(score > highScore){
                highScore = score
                document.querySelector('.highscore').textContent = highScore
            }
      
        }else if(guess > secretNumber){
            setMessage("Your number is too high!")
            score--
            document.querySelector('#score').textContent = score
        }else if(guess < secretNumber){
            setMessage("Your number is too low!")
            score--
            document.querySelector('#score').textContent = score
        }
    }
    else if(score === 0){
        setMessage("You've lost the game!")
        document.querySelector('#score').textContent = 0
        document.querySelector('body').style.backgroundColor = '#FF0000'
        document.querySelector('.number').style.width = '30rem'
        number.textContent = secretNumber
    }
    
    
})  


 again.addEventListener("click", ()=>{
    score = 20
    secretNumber = Math.trunc(Math.random()* 20)+1;
    console.log(secretNumber)
    document.querySelector('body').style.backgroundColor = ' #222'
    document.querySelector('#score').textContent = score
    document.querySelector('.number').style.width = '15rem'
    number.textContent = "?"
    document.querySelector('#guess').value = ""
    setMessage("Start Guessing ...")
 
 })
