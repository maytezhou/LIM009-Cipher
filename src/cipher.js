window.cipher ={
  encode: (passwordTest1,offSet1) => {
   
    var newWord1="";
          
       for ( let i=0;i<passwordTest1.length;i++ ) {
             if (passwordTest1[i].charCodeAt()>=65 && passwordTest1[i].charCodeAt()<=90 && offSet1>=0){
                 newWord1+=String.fromCharCode((((passwordTest1[i].charCodeAt()-65)+offSet1)%26)+65);
             }
              else if (passwordTest1[i].charCodeAt()>=32&&passwordTest1[i].charCodeAt()<48&&offSet1>=0){
                  newWord1+=passwordTest1[i];
             }
             else if (passwordTest1[i].charCodeAt()>=48&&passwordTest1[i].charCodeAt()<=57&&offSet1>=0){
              newWord1+=String.fromCharCode((((passwordTest1[i].charCodeAt()-48)+offSet1)%10)+48);
         }
         else if (passwordTest1[i].charCodeAt()>57&&passwordTest1[i].charCodeAt()<65&&offSet1>=0){
          newWord1+=passwordTest1[i];
     }
             else if (passwordTest1[i].charCodeAt()>90 && passwordTest1[i].charCodeAt()<97 &&offSet1>=0){
                  newWord1+=passwordTest1[i];
             }
            else if (passwordTest1[i].charCodeAt()>=97 && passwordTest1[i].charCodeAt()<=122  && offSet1>=0){
                  newWord1+=String.fromCharCode((((passwordTest1[i].charCodeAt()-97)+offSet1)%26)+97);
             }
           else  if (passwordTest1[i].charCodeAt()>122 && passwordTest1[i].charCodeAt()<=126 &&offSet1>=0){
                 newWord1+=passwordTest1[i];
           
            }
           else  if (passwordTest1[i].charCodeAt()===241 &&offSet1>=0){
                   newWord1+=passwordTest1[i];
           }
            else  if (passwordTest1[i].charCodeAt()===209 &&offSet1>=0){
                  newWord1+=passwordTest1[i];
           }
           else if (passwordTest1[i].charCodeAt()===191 &&offSet1>=0){
                  newWord1+=passwordTest1[i];
           } 


         else  if (passwordTest1[i].charCodeAt()>=65 && passwordTest1[i].charCodeAt()<=90 &&offSet1<0){
            if ((((passwordTest1[i].charCodeAt()-65)+offSet1)%26)<0){
               newWord1+=String.fromCharCode((((((passwordTest1[i].charCodeAt())-65)+offSet1)%26)+26)+65);
             }
            if (((((passwordTest1[i].charCodeAt()-65)+offSet1)%26))>0){
                newWord1+=String.fromCharCode(((((passwordTest1[i].charCodeAt())-65)+offSet1)%26)+65);
             }
             if ((((passwordTest1[i].charCodeAt()-65)+offSet1)%26)==0){
                newWord1+=String.fromCharCode(((((passwordTest1[i].charCodeAt())-65)+offSet1)%26)+65);
             }
         }
       else if (passwordTest1[i].charCodeAt()>=97 && passwordTest1[i].charCodeAt()<=122 &&offSet1<0){
            if(((((passwordTest1[i].charCodeAt())-97)+offSet1)%26)<0){
               newWord1+=String.fromCharCode((((((passwordTest1[i].charCodeAt())-97)+offSet1)%26)+26)+97);
            }
            if (((((passwordTest1[i].charCodeAt())-97)+offSet1)%26)>0){
              newWord1+=String.fromCharCode(((((passwordTest1[i].charCodeAt())-97)+offSet1)%26)+97);
            }
            if (((((passwordTest1[i].charCodeAt())-97)+offSet1)%26)==0){
             newWord1+=String.fromCharCode(((((passwordTest1[i].charCodeAt())-97)+offSet1)%26)+97);
            }
          }

              else if (passwordTest1[i].charCodeAt()>=32&&passwordTest1[i].charCodeAt()<48&&offSet1<0){
                newWord1+=passwordTest1[i];
             }
               else if (passwordTest1[i].charCodeAt()>=48&&passwordTest1[i].charCodeAt()<=57&&offSet1<0){
              newWord1+=String.fromCharCode((((passwordTest1[i].charCodeAt()-48)+offSet1)%10)+48);

               if((((passwordTest1[i].charCodeAt()-48)+offSet1)%10)<0){
                newWord1+=String.fromCharCode(((((passwordTest1[i].charCodeAt()-48)+offSet1)%10)+10)+48);
             }
              if ((((passwordTest1[i].charCodeAt()-48)+offSet1)%10)>0){
                 newWord1+=String.fromCharCode((((passwordTest1[i].charCodeAt()-48)+offSet1)%10)+48);
              }
              if ((((passwordTest1[i].charCodeAt()-48)+offSet1)%10)==0){
                   newWord1+=String.fromCharCode((((passwordTest1[i].charCodeAt()-48)+offSet1)%10)+48);
              }
      
           }

              else if (passwordTest1[i].charCodeAt()>57&&passwordTest1[i].charCodeAt()<65&&offSet1<0){
               newWord1+=passwordTest1[i];}
      
        else  if (passwordTest1[i].charCodeAt()>90 && passwordTest1[i].charCodeAt()<97 &&offSet1<0){
               newWord1+=passwordTest1[i];
         }
        else if (passwordTest1[i].charCodeAt()>122 && passwordTest1[i].charCodeAt()<=126 &&offSet1<0){
                newWord1+=passwordTest1[i];
         }
         else  if (passwordTest1[i].charCodeAt()===241 &&offSet1<0){
               newWord1+=passwordTest1[i];
         }
         else  if (passwordTest1[i].charCodeAt()===209 &&offSet1<0){
                newWord1+=passwordTest1[i];
         }
          else if (passwordTest1[i].charCodeAt()===191 &&offSet1<0){
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
              if ((((passwordTest2[i].charCodeAt()-97)-offSet2)%26)<0){
               newWord2+=String.fromCharCode(((((passwordTest2[i].charCodeAt()-97)-offSet2)%26)+26)+97);
           }
              if ((((passwordTest2[i].charCodeAt()-97)-offSet2)%26)>0){
             newWord2+=String.fromCharCode((((passwordTest2[i].charCodeAt()-97)-offSet2)%26)+97);
           }
              if ((((passwordTest2[i].charCodeAt()-97)-offSet2)%26)==0){
              newWord2+=String.fromCharCode(((((passwordTest2[i]).charCodeAt()-97)-offSet2)%26)+97);
           }
            
       }

                else if (passwordTest2[i].charCodeAt()>=32&&passwordTest2[i].charCodeAt()<48&&offSet2>=0){
                  newWord2+=passwordTest2[i];
            }
                  else if (passwordTest2[i].charCodeAt()>=48&&passwordTest2[i].charCodeAt()<=57&&offSet2>=0){
                 newWord2+=String.fromCharCode((((passwordTest2[i].charCodeAt()-48)-offSet2)%10)+48);

                   if((((passwordTest2[i].charCodeAt()-48)+offSet2)%10)<0){
                     newWord2+=String.fromCharCode(((((passwordTest2[i].charCodeAt()-48)-offSet2)%10)+10)+48);
                }
                 if ((((passwordTest2[i].charCodeAt()-48)+offSet2)%10)>0){
                    newWord2+=String.fromCharCode((((passwordTest2[i].charCodeAt()-48)-offSet2)%10)+48);
                }
                       if ((((passwordTest2[i].charCodeAt()-48)+offSet2)%10)==0){
                    newWord2+=String.fromCharCode((((passwordTest2[i].charCodeAt()-48)-offSet2)%10)+48);
                }

            }

                  else if (passwordTest2[i].charCodeAt()>57&&passwordTest2[i].charCodeAt()<65&&offSet2>=0){
                  newWord2+=passwordTest2[i];
            }

         else if (passwordTest2[i].charCodeAt()>90 && passwordTest2[i].charCodeAt()<97 &&offSet2>=0){
                 newWord2+=passwordTest2[i];
       }
         else if (passwordTest2[i].charCodeAt()>122 && passwordTest2[i].charCodeAt()<=126 &&offSet2>=0){
                newWord2+=passwordTest2[i];
          
      }
         else  if (passwordTest2[i].charCodeAt()===241 &&offSet2>=0){
                 newWord2+=passwordTest2[i];
      }
        else  if (passwordTest2[i].charCodeAt()===209 &&offSet2>=0){
                 newWord2+=passwordTest2[i];
      }
           else if (passwordTest2[i].charCodeAt()===191 &&offSet2>=0){
                  newWord2+=passwordTest2[i];
      }           

                       
          else if (passwordTest2[i].charCodeAt()>=65 && passwordTest2[i].charCodeAt()<=90 && offSet2<0){
               newWord2+=String.fromCharCode((((passwordTest2[i].charCodeAt()-65)-offSet2)%26)+65);
         }
            else if (passwordTest2[i].charCodeAt()>=32&&passwordTest2[i].charCodeAt()<48&&offSet2<0){
            newWord2+=passwordTest2[i];
       }
       else if (passwordTest2[i].charCodeAt()>=48&&passwordTest2[i].charCodeAt()<=57&&offSet2<0){
        newWord2+=String.fromCharCode((((passwordTest2[i].charCodeAt()-48)-offSet2)%10)+48);
       }
             else if (passwordTest2[i].charCodeAt()>57&&passwordTest2[i].charCodeAt()<65&&offSet2<0){
             newWord2+=passwordTest2[i];
      }


          else if (passwordTest2[i].charCodeAt()>90 && passwordTest2[i].charCodeAt()<97 &&offSet2<0){
                newWord2+=passwordTest2[i];
         
           }
          else if (passwordTest2[i].charCodeAt()>=97 && passwordTest2[i].charCodeAt()<=122  && offSet2<0){
                newWord2+=String.fromCharCode((((passwordTest2[i].charCodeAt()-97)-offSet2)%26)+97);
           }
         
          else if (passwordTest2[i].charCodeAt()>122 && passwordTest2[i].charCodeAt()<=126 &&offSet2<0){
                  newWord2+=passwordTest2[i];
             
           }
                   
          else if (passwordTest2[i].charCodeAt()===241 &&offSet2<0 ){
                  newWord2+=passwordTest2[i];
           }
          else if (passwordTest2[i].charCodeAt()===209 &&offSet2<0 ){
                  newWord2+=passwordTest2[i];
           }
          
          else if (passwordTest2[i].charCodeAt()===191 &&offSet2<0){
                  newWord2+=passwordTest2[i];
         }
         }
         return newWord2;
         } 
       };


