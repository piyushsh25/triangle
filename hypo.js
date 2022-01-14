const sides=document.querySelectorAll(".side-input");
const hypoBtn=document.querySelector("#hypotenuse");
const output=document.querySelector("#outputC");

const calculateSumOfSquares=(a,b)=>{
const sumOfSquares=a*a+b*b
return sumOfSquares
}
const calculateHypotenuse=()=>{
    if(Number(sides[0].value)>0 && Number(sides[1].value>0)){
const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
const lengthOfHypotenuse=Math.sqrt(sumOfSquares);
output.innerText="The length of hypotenuse is "+ lengthOfHypotenuse;
}
else{
    output.innerText="Error!!";
}
}


hypoBtn.addEventListener("click",calculateHypotenuse)