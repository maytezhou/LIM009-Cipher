const encodeButton2 =  document.getElementById('encodebutton2');
encodeButton2.addEventListener('click', function(){
  const passwordTest1= document.getElementById('passwordtest1').value;
  const offSet1 = parseInt(document.getElementById('offset1').value);
   console.log(encode(passwordTest1,offSet1));
  
  //console.log(typeof(passwordTest1);
  //console.log(typeof (offSet1));
 
 });



 function encode (string, offset) {
    const assciNumber = string.charCodeAt();
    const newAscci = (assciNumber - 65 + offset) % 26 + 65;
    const newLetter = String.fromCharCode(newAscii)
    return newLetter;
  }
  

  const encodeScreen=document.getElementById("encodeScreen");
  const decodeScreen=document.getElementById("decodescreen");
  encodeScreen.style.display="none";
  decodeScreen.style.display="none";

const createAnAccount=document.getElementById("createAnAccount");
createAnAccount.addEventListener('click', function() {
    firstScreen.style.display = 'none';
    optionsScreen.style.display = "block"; 
})

const encodeButton1=document.getElementById("encodebutton1");
encodeButton1.addEventListener('click', function() {
    optionsScreen.style.display = 'none';
    encodeScreen.style.display = "block"; 
})
const decodeButton1=document.getElementById("decodebutton1");
decodeButton1.addEventListener('click', function() {
    optionsScreen.style.display = 'none';
    decodeScreen.style.display = "block"; 
})

//calling cypher.encode 
const encode1=document.getElementById("encode1");
encode1.addEventListener('click', function() {
    return cipher.encode();
})

//calling cypher.decode
const decode1=document.getElementById("decode1");
decode1.addEventListener('click', function() {
    return cipher.decode();
})


