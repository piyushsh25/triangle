const sides=document.querySelectorAll(".side-input");
const hypoBtn=document.querySelector("#hypotenuse");
const output=document.querySelector("#outputC");

function calculateSumOfSquares(a,b){
const sumOfSquares=a*a+b*b
return sumOfSquares
}
function calculateHypotenuse(){
const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
const lengthOfHypotenuse=Math.sqrt(sumOfSquares);
output.innerText="The length of hypotenuse is "+ lengthOfHypotenuse;
console.log(lengthOfHypotenuse);
}

hypoBtn.addEventListener("click",calculateHypotenuse)