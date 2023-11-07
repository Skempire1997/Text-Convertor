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