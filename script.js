const you0=document.getElementById("y0");
const you1=document.getElementById("y1");
const you2=document.getElementById("y2");
const you3=document.getElementById("y3");
const you4=document.getElementById("y4");
const you5=document.getElementById("y5");
const you6=document.getElementById("y6");
const com0=document.getElementById("c0");
const com1=document.getElementById("c1");
const com2=document.getElementById("c2");
const com3=document.getElementById("c3");
const com4=document.getElementById("c4");
const com5=document.getElementById("c5");
const com6=document.getElementById("c6");
var targetruns=0;
const yourtarget=document.getElementById("yourtarget");
const difficulty= document.getElementById("difficulty");
const yourtargetw=document.getElementById("yourtargetw");
var wicketinnerhtml=document.getElementById("wicket");
var scoreinnerhtml=document.getElementById("score");
const winnername=document.getElementById("winnername");
const vs=document.getElementById("vs");
const selct=document.getElementById("selct");
var score=0;
var wicket=0;
var targetwick=document.getElementById("yourtargetw");
var targeti=document.getElementById("yourtarget");

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function yourtargetfun(){
    yourtarget.innerHTML=targetruns;
    difficulty.style.display="none";
    yourtargetw.innerHTML=10;
}
document.getElementById("veryeasy").addEventListener("click",()=>{
    targetruns=randomNumber(50,150);
    yourtargetfun()
})
document.getElementById("easy").addEventListener("click",()=>{
    targetruns=randomNumber(150,250);
    yourtargetfun()
})
document.getElementById("medium").addEventListener("click",()=>{
    targetruns=randomNumber(250,400);
    console.log(targetruns)
    yourtargetfun()
})
document.getElementById("hard").addEventListener("click",()=>{
    targetruns=randomNumber(400,550);
    yourtargetfun()
})
document.getElementById("veryhard").addEventListener("click",()=>{
    targetruns=randomNumber(550,700);
    yourtargetfun()
})
document.getElementById("reset-difficulty").addEventListener("click",()=>{
    difficulty.style.display="block";
})
function your(){
    you0.style.display="none";
    you1.style.display="none";
    you2.style.display="none";
    you3.style.display="none";
    you4.style.display="none";
    you5.style.display="none";
    you6.style.display="none";
}
function computer(){
    com0.style.display="none";
    com1.style.display="none";
    com2.style.display="none";
    com3.style.display="none";
    com4.style.display="none";
    com5.style.display="none";
    com6.style.display="none";
}
function forwickets(){
    winnername.innerHTML="Computer Won"
    winnername.style.display="block"
    vs.style.display="none"
    selct.style.display="none";
}
function forwin(){
    winnername.innerHTML="You Won"
   winnername.style.display="block"
vs.style.display="none"
    selct.style.display="none";
}
function fordraw(){
   vs.style.display="none"
        selct.style.display="none";
           winnername.innerHTML="Draw"
          winnername.style.display="block"
}
function ifcond(){
    if(score>targetruns && wicket<=10){
        forwin()
       computer();
       your();
     }else if(score==targetruns && wicket==10){
        fordraw()
       computer();
       your();
     }else if(targetruns>score && wicket==10){
        forwickets()
       computer();
       your();
     }
}
function ifwicket(){
    if(wicket==10){
        forwickets()
           computer();
           your();     
    }else if(score==targetruns && wicket==10){
        fordraw()
       computer();
       your();}
}
document.getElementById("n0").addEventListener("click",()=>{
    let x = Math.floor((Math.random() * 7) + 1);
    your();
    you0.style.display="block";
    if(x==1){
        computer()
        com0.style.display="block";
        wicket++;
        wicketinnerhtml.innerHTML=wicket;
        scoreinnerhtml.innerHTML=score;
        ifwicket()
    }else if(x==2){
        computer()
        com1.style.display="block";
        score=score+1;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==3){
        computer()
        com2.style.display="block";
        score=score+2;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==4){
        computer()
        com3.style.display="block";
        score=score+3;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==5){
        computer()
        com4.style.display="block";
        score=score+4;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==6){
        computer()
        com5.style.display="block";
        score=score+5;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==7){
        computer()
        com6.style.display="block";
        score=score+6;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }
})
document.getElementById("n1").addEventListener("click",()=>{
    let x = Math.floor((Math.random() * 7) + 1);
    your();
    you1.style.display="block";
    if(x==1){
        computer()
        com0.style.display="block";
        score=score+1;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==2){
        computer()
        com1.style.display="block";
        scoreinnerhtml.innerHTML=score;
        wicket++;
        wicketinnerhtml.innerHTML=wicket;
        ifwicket()
    }else if(x==3){
        computer()
        com2.style.display="block";
        score=score+1;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==4){
        computer()
        com3.style.display="block";
        score=score+1;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==5){
        computer()
        com4.style.display="block";
        score=score+1;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==6){
        computer()
        com5.style.display="block";
        score=score+1;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==7){
        computer()
        com6.style.display="block";
        score=score+1;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }
})
document.getElementById("n2").addEventListener("click",()=>{
    let x = Math.floor((Math.random() * 7) + 1);
    your();
    you2.style.display="block";
    if(x==1){
        computer()
        com0.style.display="block";
        score=score+2;
        scoreinnerhtml.innerHTML=score;
        ifcond()    
    }else if(x==2){
        computer()
        com1.style.display="block";
        score=score+2;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==3){
        computer()
        com2.style.display="block";
        scoreinnerhtml.innerHTML=score;
        wicket++;
        wicketinnerhtml.innerHTML=wicket;
        ifwicket()
    }else if(x==4){
        computer()
        com3.style.display="block";
        score=score+2;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==5){
        computer()
        com4.style.display="block";
        score=score+2;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==6){
        computer()
        com5.style.display="block";
        score=score+2;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==7){
        computer()
        com6.style.display="block";
        score=score+2;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }
})
document.getElementById("n3").addEventListener("click",()=>{
    let x = Math.floor((Math.random() * 7) + 1);
    your();
    you3.style.display="block";
    if(x==1){
        computer()
        com0.style.display="block";
        score=score+3;
        scoreinnerhtml.innerHTML=score;
        ifcond() 
    }else if(x==2){
        computer()
        com1.style.display="block";
        score=score+3;
        scoreinnerhtml.innerHTML=score;
        ifcond()   
    }else if(x==3){
        computer()
        com2.style.display="block";
        score=score+3;
        scoreinnerhtml.innerHTML=score;
        ifcond()    
    }else if(x==4){
        computer()
        com3.style.display="block";
        scoreinnerhtml.innerHTML=score;
        wicket++;
        wicketinnerhtml.innerHTML=wicket;
        ifwicket()
    }else if(x==5){
        computer()
        com4.style.display="block";
        score=score+3;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==6){
        computer()
        com5.style.display="block";
        score=score+3;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==7){
        computer()
        com6.style.display="block";
        score=score+3;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }
})
document.getElementById("n4").addEventListener("click",()=>{
    let x = Math.floor((Math.random() * 7) + 1);
    your();
    you4.style.display="block";
    if(x==1){
        computer()
        com0.style.display="block";
        score=score+4;
        scoreinnerhtml.innerHTML=score;
        ifcond()  
    }else if(x==2){
        computer()
        com1.style.display="block";
        score=score+4;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==3){
        computer()
        com2.style.display="block";
        score=score+4;
        scoreinnerhtml.innerHTML=score;
        ifcond() 
    }else if(x==4){
        computer()
        com3.style.display="block";
        score=score+4;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==5){
        computer()
        com4.style.display="block";
        scoreinnerhtml.innerHTML=score;
        wicket++;
        wicketinnerhtml.innerHTML=wicket;
        ifwicket()
    }else if(x==6){
        computer()
        com5.style.display="block";
        score=score+4;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==7){
        computer()
        com6.style.display="block";
        score=score+4;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }
})
document.getElementById("n5").addEventListener("click",()=>{
    let x = Math.floor((Math.random() * 7) + 1);
    your();
    you5.style.display="block";
    if(x==1){
        computer()
        com0.style.display="block";
        score=score+5;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==2){
        computer()
        com1.style.display="block";
        score=score+5;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==3){
        computer()
        com2.style.display="block";
        score=score+5;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==4){
        computer()
        com3.style.display="block";
        score=score+5;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==5){
        computer()
        com4.style.display="block";
        score=score+5;
        scoreinnerhtml.innerHTML=score;
        ifcond()  
    }else if(x==6){
        computer()
        com5.style.display="block";
        scoreinnerhtml.innerHTML=score;
        wicket++;
        wicketinnerhtml.innerHTML=wicket;
        ifwicket()
    }else if(x==7){
        computer()
        com6.style.display="block";
        score=score+5;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }
})
document.getElementById("n6").addEventListener("click",()=>{
    let x = Math.floor((Math.random() * 7) + 1);
    your();
    you6.style.display="block";
    if(x==1){
        computer()
        com0.style.display="block";
        score=score+6;
        scoreinnerhtml.innerHTML=score;
        ifcond()  
    }else if(x==2){
        computer()
        com1.style.display="block";
        score=score+6;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==3){
        computer()
        com2.style.display="block";
        score=score+6;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==4){
        computer()
        com3.style.display="block";
        score=score+6;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==5){
        computer()
        com4.style.display="block";
        score=score+6;
        scoreinnerhtml.innerHTML=score;
        ifcond()
    }else if(x==6){
        computer()
        com5.style.display="block";
        score=score+6;
        scoreinnerhtml.innerHTML=score;
        ifcond()  
    }else if(x==7){
        computer()
        com6.style.display="block";
        scoreinnerhtml.innerHTML=score;
        wicket++;
        wicketinnerhtml.innerHTML=wicket;
        ifwicket()
    }
})
document.getElementById("reset-score").addEventListener("click",()=>{
    wicket=0;
    score=0;
    wicketinnerhtml.innerHTML=wicket;
    scoreinnerhtml.innerHTML=score;
    computer()
    your()
    com0.style.display="block";
    you0.style.display="block";
    vs.style.display="block";
    winnername.style.display="none"
    selct.style.display="flex";
})
