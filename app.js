const inputs= document.querySelectorAll(".angle-input")
const triButton=document.querySelector("#is-triangle-btn");
const outputA=document.querySelector("#output-one");

function sumOfAngles(angle1,angle2,angle3){
    const sum=angle1+angle2+angle3;
    return sum;
}

function isTriangle(){
 const sum=sumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
// console.log(inputs[0].value,inputs[1].value,inputs[2].value);
if(sum === 180){
    outputA.innerText="it is a triangle ,yayayayayayyyyyy"
}else{
    outputA.innerText="not a triangle!!!"
}
console.log(sum);
}

triButton.addEventListener("click",isTriangle);