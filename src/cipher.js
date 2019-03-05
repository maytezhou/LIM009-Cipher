window.cipher ={
  encode: (passwordTest1,offSet1) => {
   
    var newWord1="";
          
       for ( let i=0;i<passwordTest1.length;i++ ) {
             if (passwordTest1[i].charCodeAt()>=65 && passwordTest1[i].charCodeAt()<=90 && offSet1>=0){
                 newWord1+=String.fromCharCode((((passwordTest1[i].charCodeAt()-65)+offSet1)%26)+65);
             }
              else if (passwordTest1[i].charCodeAt()<65&&passwordTest1[i].charCodeAt()>=32&&offSet1>=0){
                  newWord1+=passwordTest1[i];
             }
             else if (passwordTest1[i].charCodeAt()>90 && passwordTest1[i].charCodeAt()<97 &&offSet1>=0){
                  newWord1+=passwordTest1[i];
             }
            else if (passwordTest1[i].charCodeAt()>=97 && passwordTest1[i].charCodeAt()<=122  && offSet1>=0){
                  newWord1+=String.fromCharCode(((((passwordTest1[i].toUpperCase()).charCodeAt()-65)+offSet1)%26)+65);
             }
           else  if (passwordTest1[i].charCodeAt()>122 && passwordTest1[i].charCodeAt()<=126 &&offSet1>=0){
                 newWord1+=passwordTest1[i];
           
         }

         else  if (passwordTest1[i].charCodeAt()>=65 && passwordTest1[i].charCodeAt()<=90 &&offSet1<0){
            if ((((passwordTest1[i].charCodeAt()-65)+offSet1)%26)<0){
               newWord1+=String.fromCharCode(((((passwordTest1[i].charCodeAt()-65)+offSet1)%26)+26)+65);
             }
            if (((((passwordTest1[i].charCodeAt()-65)+offSet1)%26))>0){
                newWord1+=String.fromCharCode((((passwordTest1[i].charCodeAt()-65)+offSet1)%26)+65);
             }
             if ((((passwordTest1[i].charCodeAt()-65)+offSet1)%26)==0){
                newWord1+=String.fromCharCode((((passwordTest1[i].charCodeAt()-65)+offSet1)%26)+65);
             }
         }
       else if (passwordTest1[i].charCodeAt()>=97 && passwordTest1[i].charCodeAt()<=122  && offSet1<0){
            if (((((passwordTest1[i].toUpperCase()).charCodeAt()-65)+offSet1)%26)<0){
               newWord1+=String.fromCharCode((((((passwordTest1[i].toUpperCase()).charCodeAt()-65)+offSet1)%26)+26)+65);
            }
            if (((((passwordTest1[i].toUpperCase()).charCodeAt()-65)+offSet1)%26)>0){
              newWord1+=String.fromCharCode(((((passwordTest1[i].toUpperCase()).charCodeAt()-65)+offSet1)%26)+65);
            }
            if (((((passwordTest1[i].toUpperCase()).charCodeAt()-65)+offSet1)%26)==0){
             newWord1+=String.fromCharCode(((((passwordTest1[i].toUpperCase()).charCodeAt()-65)+offSet1)%26)+65);
            }
         }
        else if (passwordTest1[i].charCodeAt()<65&&passwordTest1[i].charCodeAt()>=32 &&offSet1<0){
              newWord1+=passwordTest1[i];
        }
        else  if (passwordTest1[i].charCodeAt()>90 && passwordTest1[i].charCodeAt()<97 &&offSet1<0){
               newWord1+=passwordTest1[i];
         }
        else if (passwordTest1[i].charCodeAt()>122 && passwordTest1[i].charCodeAt()<=126 &&offSet1<0){
                newWord1+=passwordTest1[i];
         }
         else  if (passwordTest1[i].charCodeAt()===241 ){
               newWord1+=(passwordTest1[i].toUpperCase());
         }
         else  if (passwordTest1[i].charCodeAt()===209 ){
                newWord1+=passwordTest1[i];
         }
          else if (passwordTest1[i].charCodeAt()===191 ){
               newWord1+=passwordTest1[i];
     } 
        }
        return newWord1;
     } ,
     decode: (passwordTest2,offSet2) => {
       
       var newWord2="";
       for ( let i=0;i<passwordTest2.length;i++ ) {
         
          if (passwordTest2[i].charCodeAt()>=65 && passwordTest2[i].charCodeAt()<=90 &&offSet2>=0){
            
              if ((((passwordTest2[i].charCodeAt()-65)-offSet2)%26)<0){
                newWord2+=String.fromCharCode(((((passwordTest2[i].charCodeAt()-65)-offSet2)%26)+26)+65);
              }
              if (((((passwordTest2[i].charCodeAt()-65)-offSet2)%26))>0){
                newWord2+=String.fromCharCode((((passwordTest2[i].charCodeAt()-65)-offSet2)%26)+65);
              }
              if ((((passwordTest2[i].charCodeAt()-65)-offSet2)%26)==0){
                    newWord2+=String.fromCharCode((((passwordTest2[i].charCodeAt()-65)-offSet2)%26)+65);
              }
        
          }
          
          else if (passwordTest2[i].charCodeAt()>=97 && passwordTest2[i].charCodeAt()<=122  && offSet2>=0){
              if (((((passwordTest2[i].toUpperCase()).charCodeAt()-65)-offSet2)%26)<0){
               newWord2+=String.fromCharCode((((((passwordTest2[i].toUpperCase()).charCodeAt()-65)-offSet2)%26)+26)+65);
           }
              if (((((passwordTest2[i].toUpperCase()).charCodeAt()-65)-offSet2)%26)>0){
             newWord2+=String.fromCharCode(((((passwordTest2[i].toUpperCase()).charCodeAt()-65)-offSet2)%26)+65);
           }
              if (((((passwordTest2[i].toUpperCase()).charCodeAt()-65)-offSet2)%26)==0){
              newWord2+=String.fromCharCode(((((passwordTest2[i].toUpperCase()).charCodeAt()-65)-offSet2)%26)+65);
           }
            
       }

         else if (passwordTest2[i].charCodeAt()<65 &&passwordTest2[i].charCodeAt()>=32 &&offSet2>=0){
               newWord2+=passwordTest2[i];
       }
         else if (passwordTest2[i].charCodeAt()>90 && passwordTest2[i].charCodeAt()<97 &&offSet2>=0){
                 newWord2+=passwordTest2[i];
       }
         else if (passwordTest2[i].charCodeAt()>122 && passwordTest2[i].charCodeAt()<=126 &&offSet2>=0){
                newWord2+=passwordTest2[i];
          
      }
               
          else if (passwordTest2[i].charCodeAt()>=65 && passwordTest2[i].charCodeAt()<=90 && offSet2<0){
               newWord2+=String.fromCharCode((((passwordTest2[i].charCodeAt()-65)-offSet2)%26)+65);
         }

          else if (passwordTest2[i].charCodeAt()<65 &&passwordTest2[i].charCodeAt()>=32 &&offSet2<0){
               newWord2+=passwordTest2[i];
          }
          else if (passwordTest2[i].charCodeAt()>90 && passwordTest2[i].charCodeAt()<97 &&offSet2<0){
                newWord2+=passwordTest2[i];
         
           }
          else if (passwordTest2[i].charCodeAt()>=97 && passwordTest2[i].charCodeAt()<=122  && offSet2<0){
                newWord2+=String.fromCharCode(((((passwordTest2[i].toUpperCase()).charCodeAt()-65)-offSet2)%26)+65);
           }
         
          else if (passwordTest2[i].charCodeAt()>122 && passwordTest2[i].charCodeAt()<=126 &&offSet2<0){
                  newWord2+=passwordTest2[i];
             
           }
                   
          else if (passwordTest2[i].charCodeAt()===241 ){
                  newWord2+=(passwordTest2[i].toUpperCase());
           }
          else if (passwordTest2[i].charCodeAt()===209 ){
                  newWord2+=passwordTest2[i];
           }
          
          else if (passwordTest2[i].charCodeAt()===191 ){
                  newWord2+=passwordTest2[i];
         }
         }
         return newWord2;
         } 
       };