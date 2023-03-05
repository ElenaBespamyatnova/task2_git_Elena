//Task 1
function myFunction(a, b){
    let sum = 0;
    let count = 0;
  for(let i = a; i <= b; i++){
    if(i % 2 == 0){
        sum += i;
        count ++;
    }
  }
  return "Сумма четных чисел в диапазоне равна: " + sum + ". Количество четных чисел в диапазоне равно: " + count;
}

console.log(myFunction(3, 5));