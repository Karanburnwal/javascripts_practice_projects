const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function(){
    const randomNo=randomfn();
    document.body.style.backgroundColor=colors[randomNo];
    console.log(colors[randomNo]);
    color.textContent=colors[randomNo];
});
function randomfn() {
    return Math.floor(Math.random()*colors.length);
};