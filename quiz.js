const quizForm=document.querySelector(".quiz-form");
const buttonB=document.querySelector("#submit-answer-btn");
const outputB=document.querySelector("#output-two")

const correctAnswers=["right","180","3","3","90"];

function calculateScore(){
let score=0;
let index=0; 
const formResults= new FormData(quizForm);
for(let value of formResults.values()){
    if(value===correctAnswers[index]){
        score++;
    }
    index++;
}

outputB.innerText="Your score is "+score;
}

buttonB.addEventListener("click",calculateScore);
