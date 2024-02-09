let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGameBtn=document.querySelector(".newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0=true;
let count=0;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];





boxes.forEach((box)=>{
      box.addEventListener("click",()=>{
        count++;
         console.log("box is clicked");

         if(turn0){
              box.innerText="X";
              box.style.color="#409997";
              turn0=false;
            
         }else{
            box.innerText="O";
            box.style.color="#B07156";
            turn0=true;

         }
         box.disabled=true;
         checkWinner();
         
         if(count>=9){
            msg.innerText="Match is Drow";
            msgContainer.classList.remove("hide");
            disabledBox();
        }
                                          //dissable the box which u click
         
      });
});


const resetGame=()=>{
    turn0=true;
    enabledBox();
    msgContainer.classList.add("hide");
    count=0;
    turn0=true;
}

const disabledBox=()=>{  // dissable all
    for(let i of boxes){
        i.disabled=true;
        count=0;
    }
}
const enabledBox=()=>{
    for(let i of boxes){
        i.disabled=false;
        i.innerText="";
    }
}

const showWinner=(winner)=>{
      msg.innerText=`congratulations Winner is ${winner}`;
      msgContainer.classList.remove("hide");
      disabledBox();
      
}


const checkWinner=()=>{
       for(let i of winPatterns){
             let pos1val=boxes[i[0]].innerText;
             let pos2val=boxes[i[1]].innerText;
             let pos3val=boxes[i[2]].innerText;
       
       if(pos1val!="" && pos2val!="" && pos3val!=""){
             if(pos1val==pos2val && pos2val==pos3val){
                  console.log("winner", pos1val);

                  showWinner(pos1val);
             }
       }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click", resetGame);


