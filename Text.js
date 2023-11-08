let userText = document.getElementById("userText");
let word = document.getElementById('words');
word.innerHTML='0';
let character = document.getElementById('characters');
character.innerHTML = '0';

function fetchData(){
    let arr = userText.value.split(' ').length;
    word.innerHTML = arr;
    let strlngth = userText.value.length;
    character.innerHTML = strlngth;
}
function upperCase(){
    userText.value = userText.value.toUpperCase();
}
function lowerCase(){
    userText.value = userText.value.toLowerCase();
}
function bold(){
    let userText = document.getElementById("userText")
    userText.setAttribute('class','bold');
}
function underLine(){
    let userText = document.getElementById("userText")
    userText.setAttribute('class','underline');

}
function italic(){
    let userText = document.getElementById("userText")
    userText.setAttribute('class','italic');
}
function font1(){
    let userText = document.getElementById("userText")
    userText.setAttribute('class','font1');
}

function lineThrough(){
     let userText = document.getElementById("userText")
    userText.setAttribute('class','linethrough');
}
function color(){
     let userText = document.getElementById("userText")
    userText.setAttribute('class','color1');
}

function clear(){
    let userText = document.getElementById("userText")
    userText.setAttribute('class','clear');

}
