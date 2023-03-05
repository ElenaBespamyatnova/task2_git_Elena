//Task 3
function getSqrtBySequentialSelection(number){
    for (let i = 0; i <= number; i++) {
        if (i * i === number) 
        return i;
      }
}

function getSqrtByBinarySearch(number){    
    let sqrt = 0;
    let numberValue = number;
    let result = 0;
    while (sqrt <= numberValue) {
      const middleValue = Math.trunc((sqrt + numberValue) / 2);
      if (middleValue * middleValue === number) {
        return middleValue;
      }
      else if (middleValue * middleValue < number)  {
        sqrt = middleValue + 1;
        result = middleValue;
      }
      else {
        numberValue = middleValue - 1;
      }
    }
    return result;
}


console.log('Ваш результат: ' + getSqrtBySequentialSelection(144));
console.log('Ваш результат: ' + getSqrtByBinarySearch(9));