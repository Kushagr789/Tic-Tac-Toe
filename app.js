let boxes=document.querySelectorAll(".box");
let rstBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector('#new-btn');
let msgConatiner=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
let turnO=true; 
let winPat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,5],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const checkWinner=()=>{
    for(let pattern of winPat){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                showWinner(pos1);
            }
        }
    }
}
const showWinner=(winner)=>{
    console.log(winner);
    msg.innerText= 'Congratulations, Winner is '+winner;
    msgConatiner.classList.remove("hide");
    disableBoxes();
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgConatiner.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
rstBtn.addEventListener("click",resetGame);