//Task 2
function isPrime(num){
   if (num===1)
   {
     return false;
   }
   else if(num === 2)
   {
     return true;
   }
   else
   {
     for(let i = 2; i < num; i++)
     {
       if(num % i === 0)
       {
         return false;
       }
     }
     return true;  
   }
}


console.log('Ваш результат:' + isPrime(32));