// window.cipher = {
//   encode: (offset,string) => {
//     /* Acá va tu código */
//   },
//   decode: () => {
//     /* Acá va tu código */
//   }
// };


const offSet1=document.getElementById("offSet1");
const offSet2=document.getElementById("offSet2");
const firstPassword1=document.getElementById("firstPassword1");
const firstPassword2=document.getElementById("firstPassword2");
window.cipher ={


 decode :(offSet2,firstPassword2) =>{
    var arr=[];
    for ( let i=0;i<firstpassword2.length;i++ ) {
   if( firstPassword2.charCodeAt(i)>=65 && firstPassword2.charCodeAt(i)<=90){
    arr.push(String.fromCharCode((((firstPassword2.CharCodeAt(i)-65)+offSet2)%26))+65);
   }
 document.write(arr.join(""));}

}
encode :(offSet1,firstPassword1) =>{
    var arr=[];
    for ( let i=0;i<firstpassword1.length;i++ ) {
   if( firstPassword2.charCodeAt(i)>=65 && firstPassword2.charCodeAt(i)<=90){
    arr.push(String.fromCharCode((((firstPassword2.CharCodeAt(i)-65)+offSet2)%26))+65);
   }
 document.write(arr.join(""));}

}
