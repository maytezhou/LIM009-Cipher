

/* */
const firstScreen=document.getElementById('first-screen');
const optionsScreen=document.getElementById('options-screen');
const encodeScreen=document.getElementById('encode-screen');
const decodeScreen=document.getElementById('decode-screen');
const dataScreen=document.getElementById('data-screen');
optionsScreen.style.display='none';
encodeScreen.style.display='none';
decodeScreen.style.display='none';
dataScreen.style.display='none';
  

 /*const userName=document.getElementById('user-name');
 const password=document.getElementById('password');
 const login=document.getElementById('login');
  
 login.addEventListener('click', ()=>{
    const userNameValue=document.getElementById('user-name').value;
    const passwordValue=document.getElementById('password').value;
 console.log(userNameValue,passwordValue);
  });*/
  
const createAnAccount=document.getElementById('create-an-account');
createAnAccount.addEventListener('click', ()=> {
    firstScreen.style.display = 'none';
    dataScreen.style.display = 'block'; 
});

const sentData=document.getElementById('sent-data');
sentData.addEventListener('click', ()=>{
dataScreen.style.display='none';
optionsScreen.style.display='block';
});

const encodeButton1=document.getElementById('encode-button1');
encodeButton1.addEventListener('click',() => {
    optionsScreen.style.display = 'none';
    encodeScreen.style.display = 'block'; 
});
const decodeButton1=document.getElementById('decode-button1');
decodeButton1.addEventListener('click', () => {
    optionsScreen.style.display = 'none';
    decodeScreen.style.display = 'block'; 
});

//calling cypher.encode 
const encodeButton2=document.getElementById('encode-button2');
const encodedWordShowed=document.getElementById("encoded-word-showed");
encodeButton2.addEventListener('click',()=>{
const passwordTest1=document.getElementById('password-test1').value;
    /*console.log(passwordTest1);*/
const offSet1=parseInt(document.getElementById('offset1').value);
   /* console.log(offSet1);*/
encodedWordShowed.innerHTML=cipher.encode(passwordTest1,offSet1);
   /* console.log(cipher.encode(passwordTest1,offSet1));*/
});

//calling cypher.decode

const decodeButton2= document.getElementById("decode-button2");
const decodedWordShowed=document.getElementById("decoded-word-showed");
decodeButton2.addEventListener('click', function() {
const passwordTest2=document.getElementById('password-test2').value;
 /* console.log(passwordTest2);*/
const offSet2=parseInt(document.getElementById('offset2').value);
  /* console.log(offSet2);*/
decodedWordShowed.innerHTML=cipher.decode(passwordTest2,offSet2);
  /* console.log(cipher.decode(passwordTest2,offSet2));*/
});