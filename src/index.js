/* Acá va tu código */
const firstScreen=document.getElementById("firstScreen");
const optionsScreen=document.getElementById("optionsScreen");
const encodeScreen=document.getElementById("encodeScreen");
const decodeScreen=document.getElementById("decodeScreen");


optionsScreen.style.display="none";
encodeScreen.style.display="none";
decodeScreen.style.display="none";

const createAnAccount=document.getElementById("createAnAccount");


createAnAccount.addEventListener('click', function() {
    firstScreen.style.display = 'none';
    optionsScreen.style.display = "block"; 
})

const encode=document.getElementById("encode");
encode.addEventListener('click', function() {
    optionsScreen.style.display = 'none';
    encodeScreen.style.display = "block"; 
})

const decode=document.getElementById("decode");
decode.addEventListener('click', function() {
    optionsScreen.style.display = 'none';
    decodeScreen.style.display = "block"; 
})


