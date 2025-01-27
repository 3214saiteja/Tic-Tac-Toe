let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msg_container=document.querySelector(".msg-container");
let winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let playerO=true;
let count=0;
let checkWinner=()=>{
    for (let pt of winPatterns)
    {
        let p1=boxes[pt[0]].innerText;
        let p2=boxes[pt[1]].innerText;
        let p3=boxes[pt[2]].innerText;
        if(p1!="" && p2!="" && p3!="")
        {
            if(p1===p2 && p2===p3)
            {
                showWinner(boxes[pt[0]].innerText);
                console.log("winner");
                return true;

            }
        }
    }
}
let showWinner=(winner)=>{
    msg.innerText=  `congratulations, winner is ${winner}`;
    msg_container.classList.remove("hide");
    boxesDisable();

}
let boxesDisable=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
let boxesEnable=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
}
let drawGame=()=>{
    msg.innerText="game is draw";
    msg_container.classList.remove("hide");
    boxes.disabled=true;
}
boxes.forEach((box)=>{
    
    box.addEventListener("click", ()=>{
        if(playerO)
        {
            box.innerText="O";
            playerO=false;
            console.log("O");
           
        }
        else{
            box.innerText="X";
            playerO=true;
            console.log("X");
           
        }
        box.disabled=true
        count++;
        let winner=checkWinner();
        if(count===9 && !winner)
        {
            drawGame();
        }
        
    });
    
    
});

resetbtn.addEventListener(("click"),()=>{
    playerO=true;
    count=0;
    boxesEnable();
    msg_container.classList.add("hide");
})
    
newGamebtn.addEventListener(("click"),()=>{
    playerO=true;
    count=0;
    boxesEnable();
    msg_container.classList.add("hide");
})


