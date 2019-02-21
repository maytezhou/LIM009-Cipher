// window.cipher = {
//   encode: (offset,string) => {
//     /* Acá va tu código */
//   },
//   decode: () => {
//     /* Acá va tu código */
//   }
// };


const offSet1=document.getElementById("offset1");
const offSet2=document.getElementById("offset2");
const firstPassword1=document.getElementById("firstpassword1");
const firstPassword2=document.getElementById("firstpassword2");
window.cipher ={
encode :(offset1,firstpassword1) =>{
    var arr=[];
     for ( let i=0;i<firstpassword1.length;i++ ) {
    if( firstPassword1.chardCodeAt(i)>=65 && firstPassword1.charCodeAt(i)<=90)
     arr.push(firstPassword1.fromCharCode(firstPassword1.ChardCodeAt(i)+offSet1));
    }
},

 decode :(offset2,firstpassword2) =>{
    var arr=[];
    for ( let i=0;i<firstpassword2.length;i++ ) {
   if( firstPassword2.chardCodeAt(i)>=65 && firstPassword2.charCodeAt(i)<=90)
    arr.push(firstPassword2.fromCharCode(firstPassword2.ChardCodeAt(i)+offSet2));
   }

}
}
