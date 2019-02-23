

  const firstScreen=document.getElementById('first-screen');
  const optionsScreen=document.getElementById('options-screen');
  const encodeScreen=document.getElementById('encode-screen');
  const decodeScreen=document.getElementById('decode-screen');
  
  
  
  optionsScreen.style.display='none';
  encodeScreen.style.display='none';
  decodeScreen.style.display='none';


const createAnAccount=document.getElementById('create-an-account');

createAnAccount.addEventListener('click', function() {
    firstScreen.style.display = 'none';
    optionsScreen.style.display = 'block'; 
});

const encodeButton1=document.getElementById('encode-button1');
encodeButton1.addEventListener('click', function() {
    optionsScreen.style.display = 'none';
    encodeScreen.style.display = 'block'; 
});
const decodeButton1=document.getElementById('decode-button1');
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


