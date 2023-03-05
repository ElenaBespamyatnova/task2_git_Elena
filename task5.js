//Task 5
function digitSum(y){
  const digitArray = ('' + y).split('');
  let sum = 0;
  for(let i = 0; i < digitArray.length; i++){
     sum += Number(digitArray[i]);
  }
  return sum;
}

console.log('Ваш результат: ' + digitSum(123));