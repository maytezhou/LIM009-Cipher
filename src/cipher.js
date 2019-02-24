



/*window.cipher = {
  
  encode: (offset,string) => {
  
 },
 decode: () => {
   
   }
 };*/

window.cipher ={
   encode: (passwordTest1,offSet1) => {
     var newWord1="";
       for ( let i=0;i<passwordTest1.length;i++ ) {
         if (passwordTest1[i].charCodeAt()>=65 && passwordTest1[i].charCodeAt()<=90){
           newWord1+=String.fromCharCode((((passwordTest1[i].charCodeAt()-65)+offSet1)%26)+65);
        }
          else if (passwordTest1[i].charCodeAt()<=65 && passwordTest1[i].charCodeAt()>=90){
            newWord1+=passwordTest1[i];
            }
          }
            return newWord1; 
        } ,

   decode: (passwordTest2,offSet2) => {
     var newWord2="";
         for ( let i=0;i<passwordTest2.length;i++ ) {
           if (passwordTest2[i].charCodeAt()>=65 && passwordTest2[i].charCodeAt()<=90){
             newWord2+=String.fromCharCode((((passwordTest2[i].charCodeAt()-65)-offSet2)%26)+65);
               }
            else if (passwordTest2[i].charCodeAt()<=65 && passwordTest2[i].charCodeAt()>=90){
             newWord2+=passwordTest2[i];
             }
           }
              return newWord2; 
         } 
        };

