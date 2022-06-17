let resultBoard=document.querySelector('.resultBoard');


showResultBoard=function(){
    resultBoard.style.visibility="visible"

}

hideResultBoard=function(){
    resultBoard.style.visibility="hidden"

}

onImageClick=function(e){
    let targetElement=e.target;
    let elementName=targetElement.alt;

    let displayElement=document.querySelector('.content h4');
    displayElement.innerText=elementName;

    targetElement.style.transform='scale(1.1)'
    showResultBoard();
    computer();
    if(elementName==content1){
        document.querySelector('.resultBoard').innerHTML='DRAW !!!';
        document.querySelector('.resultBoard').style.background='yellowgreen';
    }
    else if(elementName=='rock' && (content1=='scissor' || content1=='lizard')){
        document.querySelector('.resultBoard').innerHTML='YOU WON !!!';
        document.querySelector('.resultBoard').style.background='green';
    }else if(elementName=='paper' && (content1=='rock' || content1=='spock')){
        document.querySelector('.resultBoard').innerHTML='YOU WON !!!';
        document.querySelector('.resultBoard').style.background='green';
    }
    else if(elementName=='scissor' && (content1=='paper' || content1=='lizard')){
        document.querySelector('.resultBoard').innerHTML='YOU WON !!!';
        document.querySelector('.resultBoard').style.background='green';
    }
    else if(elementName=='lizard' && (content1=='spock' || content1=='paper')){
        document.querySelector('.resultBoard').innerHTML='YOU WON !!!';
        document.querySelector('.resultBoard').style.background='green';
    }
    else if(elementName=='spock' && (content1=='rock' || content1=='scissor')){
        document.querySelector('.resultBoard').innerHTML='YOU WON !!!';
        document.querySelector('.resultBoard').style.background='green';
    }
    else{
        document.querySelector('.resultBoard').innerHTML='YOU LOST !!!';
        document.querySelector('.resultBoard').style.background='red';
    }
    // document.querySelector('.cover').style.display='block';


}


let images=document.querySelectorAll('.content .icon')
for(let image of images){
    image.addEventListener('click',onImageClick);
   
}

let arr=['rock','paper','scissor','lizard','spock'];
let random=Math.trunc(Math.random() * 5)
let secondplayer=document.querySelectorAll('.icons1')
function computer(){
    content1=document.querySelector('.content1 h4').innerHTML=arr[random]
    for(let x of secondplayer){
    if(arr[random]==x.getAttribute('alt')){
        x.style.transform='scale(1.3)'

    }
}
}
