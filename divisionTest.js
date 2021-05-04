//division test 

console.log("this is a test");


var array = [[16,[8,2],4],2,80];

function processArray(array )
{
    var numer =0.0;
    var denom=0.0;

   for(var i = 0; i<(array.length-1); i++)
   {
       if(Array.isArray(array[i])){
          var tempn = processArray(array[i])
          numer = tempn
          array[i]=numer;
       }
       else{
           numer=array[i]
       }

       if(Array.isArray(array[i+1])){
           var tempd = processArray(array[i+1])
           denom = tempd
           array[i+1]=denom;
       }
       else{
           denom = array[i+1]
       }

       array[i+1]= numer/denom;
       numer = numer/denom;
   }
   return numer
}

console.log("Answer is:"+  processArray(array));