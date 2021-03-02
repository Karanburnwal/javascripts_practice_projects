const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function(){
    let randomColor=randomfn();
    document.body.style.backgroundColor=randomColor;
    //console.log(colors[randomNo]);
    color.textContent=randomColor;
});
function randomfn() {
    return "#"+hex[Math.floor(Math.random()*16)]+hex[Math.floor(Math.random()*16)]+
    hex[Math.floor(Math.random()*16)]+hex[Math.floor(Math.random()*16)]+hex[Math.floor(Math.random()*16)]
    +hex[Math.floor(Math.random()*16)];
};