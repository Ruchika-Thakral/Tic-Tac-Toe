let music=new Audio('music.mp3');
let sound=new Audio('gameover.mp3');
let ting=new Audio('ting.mp3');
music.play();
let gameover=false;
let myturn='X';

function changeTurn(){
    return myturn=="X"?"0":"X";
}

const gamewin=()=>{
    let boxText=document.getElementsByClassName('boxtext');
    let win=[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    win.forEach(e=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '')){
            gameover=true;
            sound.play()
            let info=document.querySelector('.info');
            info.innerText=boxText[e[0]].innerText+" Won";
            document.getElementsByTagName('img')[0].style.width="200px";
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width="20vw";
        }
        
    })
}

let box=document.getElementsByClassName('box');
Array.from(box).forEach(element=>{
    let boxText=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxText.innerText!=' '){
            boxText.innerText=myturn;
            myturn=changeTurn();
            ting.play();
            gamewin();
            if(gameover==false){
            let info=document.querySelector('.info');
            info.innerText="Turn for "+myturn;
            }
        }
    })
})

let reset=document.getElementById('reset');
reset.addEventListener('click',()=>{
    let box=document.getElementsByClassName('box');
     Array.from(box).forEach(element=>{
        let boxText=element.querySelector('.boxtext');
        boxText.innerText="";
    })
    document.getElementsByTagName('img')[0].style.width="0px";
    document.querySelector('.line').style.width="0px";
    document.querySelector('.info').innerText="Turn for X";
    myturn="X";
    gameover=false;
})

