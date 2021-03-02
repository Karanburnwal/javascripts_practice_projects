
let cnt=0;
const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const counter=e.currentTarget.classList;
        if(counter.contains("increase")){
            cnt++;
        }
        else if(counter.contains("decrease")){
            cnt--;
        }
        else{
            cnt=0;
        }
        value.textContent=cnt;
    });
});