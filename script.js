let userscore=0;
let comptscore=0;
let chances=5;


let choices=document.querySelectorAll(".div1");
let msg=document.querySelector(".msg")
let msg1=document.querySelector(".result")
const userscorepara=document.querySelector("#user-score");
const compcorepara=document.querySelector("#comp-score");


const gencompchoice=()=>{
    const option=["stone","paper","scissor"];
    const random=Math.floor(Math.random()*3);
    return option[random];
}

const drawgame=()=>{
    console.log("Game Draw")
    msg.innerHTML="Match Draw.";
    msg.style.backgroundColor="grey";
}


const playgame=(userchoice)=>{
console.log("User Choice ",userchoice);
// Generate Computer Choice
const compchoice=gencompchoice();
console.log("Computer Choice ",compchoice);



let userwin=true;




if (userchoice==compchoice) {
      msg1.innerText=`User Choice is ${userchoice}  and Computer Choice is ${compchoice}`
    drawgame();
    chances--;
}
else if(userchoice=="stone"&&compchoice=="scissor"||
    userchoice==paper && compchoice=="stone"||
     userchoice=="scissor" && compchoice=="paper"){

         userscore++;
         userscorepara.innerText=userscore;
         chances--;

     console.log("User Won!");
     msg.innerHTML="You Won";
     msg.style.background="green";
     msg1.innerText=`Your Choice is ${userchoice}  and Computer Choice is ${compchoice}`


    //  showwinner();
     }
else{
    userwin=false;
    comptscore++;
    compcorepara.innerHTML=comptscore;
    console.log("Computer Won!");
      msg1.innerText=`User Choice is ${userchoice}  and Computer Choice is ${compchoice}`
    msg.innerHTML="You Lose";
    msg.style.background="red";
    chances--;
    
    // showwinner();
    
}

console.log(chances);



}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")

        //  console.log("Choice was  "+userchoice);
         playgame(userchoice);
         


    })
    
});


// if (chances==0) {
//         console.log("Game Over");
//         document.getElementsByClassName(".div1").disabled=true;
    
    
//     }
