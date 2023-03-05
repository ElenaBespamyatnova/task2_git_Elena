//Task 4
function getFactorial(n){
   let result = n;
   for(let i = n - 1; i > 1; i--){
    result *= i;
   }
   return result;
}

console.log('Ваш результат: ' + getFactorial(4));