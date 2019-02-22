

  const firstScreen=document.getElementById('firstscreen');
  const optionsScreen=document.getElementById('optionsscreen');
  const encodeScreen=document.getElementById('encodeScreen');
  const decodeScreen=document.getElementById('decodescreen');
  
  
  
  optionsScreen.style.display='none';
  encodeScreen.style.display='none';
  decodeScreen.style.display='none';


const createAnAccount=document.getElementById('createanaccount');

createAnAccount.addEventListener('click', function() {
    firstScreen.style.display = 'none';
    optionsScreen.style.display = 'block'; 
});

const encodeButton1=document.getElementById('encodebutton1');
encodeButton1.addEventListener('click', function() {
    optionsScreen.style.display = 'none';
    encodeScreen.style.display = 'block'; 
});
const decodeButton1=document.getElementById('decodebutton1');
decodeButton1.addEventListener('click', function() {
    optionsScreen.style.display = 'none';
    decodeScreen.style.display = 'block'; 
});

//calling cypher.encode 
const encode1=document.getElementById('encode1');
encode1.addEventListener('click', function() {
    return cipher.encode();
})

//calling cypher.decode
const decode1=document.getElementById("decode1");
decode1.addEventListener('click', function() {
    return cipher.decode();
})


