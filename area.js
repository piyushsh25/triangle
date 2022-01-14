const input=document.querySelectorAll("#inputD");
const areaButton=document.querySelector(".primary");
const result=document.querySelector("#result4");

let calculate=()=>{
    if(input[0].value>0 && input[1].value>0){
    const height=Number(input[0].value);
    const base=Number(input[1].value);
    const multiply=base*height;
    const area=multiply/2;
    result.innerText="The area of the triangle is "+area;
}
else{
    result.innerText="Error";

}
}


areaButton.addEventListener("click",calculate);