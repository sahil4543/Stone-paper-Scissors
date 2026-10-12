let userScore=0;
let compScore=0;

let score=document.querySelector("#user-score");
let msg=document.querySelector("#msg");
let choices=document.querySelectorAll(".choice");
let userScorepar=document.querySelector("#user-score");
let compScorepar=document.querySelector("#computer-score");
const gencompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
};

const drawMatch=()=>{
console.log("game draw")
msg.innerText="game is draw";
msg.style.backgroundColor="yellow";

};
const showWinner=(userWin)=>{
    if(userWin==true){
    console.log("you win");
    msg.innerText="you win";
    userScore++;
    userScorepar.innerText=userScore;
    msg.style.backgroundColor="green";

    }else{
        console.log("you loose");
        msg.innerText="you loose";
        compScore++;
        compScorepar.innerText=compScore;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    console.log("user choice is",userChoice);
    const compChoice = gencompChoice();
    console.log("compChoice is",compChoice);

    //draw match

if(compChoice===userChoice){
    drawMatch();
}else{
    let userWin = true;
    if(userChoice=== "rock"){
    // paper, scissors
   userWin= compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        // rock ,scissors
      userWin= compChoice==="rock"?true:false;
    }else{
      userWin=  compChoice==="paper"?true:false;
    }
    showWinner(userWin);
}

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log("choice is clicked" ,userChoice);
        playGame(userChoice);


    });
});