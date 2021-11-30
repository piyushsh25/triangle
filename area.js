const input=document.querySelectorAll("#inputD");
const areaButton=document.querySelector(".primary");
const result=document.querySelector("#result4");

function calculate(){
    const height=Number(input[0].value);
    const base=Number(input[1].value);
    const multiply=base*height;
    const area=multiply/2;
    result.innerText="The area of the triangle is "+area;
}


areaButton.addEventListener("click",calculate);