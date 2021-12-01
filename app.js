const inputs= document.querySelectorAll(".angle-input")
const triButton=document.querySelector("#is-triangle-btn");
const outputA=document.querySelector("#output-one");

function sumOfAngles(angle1,angle2,angle3){
    const sum=angle1+angle2+angle3;
    return sum;
}

function isTriangle(){
    if((Number(inputs[0].value)>0 && Number(inputs[1].value)>0 && Number(inputs[2].value)>0)){
 const sum=sumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
// console.log(inputs[0].value,inputs[1].value,inputs[2].value);

    if(sum === 180){
    outputA.innerText="it is a triangle ,yayayayayayyyyyy"
}else{
    outputA.innerText="not a triangle!!!"
}


}  else{
    outputA.innerText="Input not accepted !!!"
  }
}

triButton.addEventListener("click",isTriangle);