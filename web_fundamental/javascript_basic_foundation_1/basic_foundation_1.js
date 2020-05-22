//Basic Foundation I

// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function numArr() {
  var maxNum = 255;
  var minNum = 1;
  var finalArr = [];
  for (var i = minNum; i<=maxNum; i++){
    finalArr.push(i);
  }
  return finalArr;
}
numArr();

// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function sumEven() {
  var sum = 0;
  for (var i = 1; i<= 1000; i++){
    if (i % 2 == 0){
      sum+=i;
    }
  }
  return sum;
}
var finalSum = sumEven();
console.log(finalSum);

// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sumOdd(){
  var sum = 0;
  for (var i = 1; i<=5000; i++){
    if(i % 2 != 0){
      sum+=i;
    }
  }
  return sum;
}
var finalSum = sumOdd();
console.log(finalSum);

// 4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
//**REVISIT**

function arrySum(arr){
  var sumNum = 0;
  for(var i=0; i<=arr.length; i++){
    //console.log(arr[i])
    sumNum += arr[i];
    console.log(sumNum);
    
  }
  return sumNum;
}
var testArr = [1,2,3,4];
console.log(arrySum(testArr))

// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function maxNum(arr){
  var maxArr = arr[0];
  for(var i=0; i<arr.length; i++){
    //console.log(arr[i])
    if (arr[i] > maxArr){
      maxArr = arr[i];
      //console.log(arr[i])
    }
  }
  return maxArr;
}
console.log(maxNum([1,7,3,4]))

// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function arrAvg(arr) {
  var sumArr = 0;
  var avgAmt = 0;

  for (var i=0; i<arr.length; i++){
    sumArr += arr[i];
  }
  avgAmt = sumArr/arr.length;

  return avgAmt;
}
console.log(arrAvg([10,10]))

// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function arrOdd(){
  var array_odd = [];

  for (var i=1; i<=50; i++){
    if (i % 2 != 0){
      array_odd.push(i)
    }
  }
  return array_odd;
}
console.log(arrOdd())

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function numGreater(arr){
  var constNum = 9;
  var constArr = [];
  
  for (var i=0; i<arr.length; i++){
    if (arr[i] > constNum){
    //console.log(arr[i])
    constArr.push(arr[i])
    }
  }
  return constArr.length;
}
console.log(numGreater([1,10,3,13]))

// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function arrySqt(arr){
  var newArr = [];

  for (var i=0; i<arr.length; i++){
    newArr.push((arr[i]*arr[i]))
  }
  return newArr; 
}
console.log(arrySqt([1,5,10,-2]))

// 10. Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function arrPositive(arr){
  var positiveArry = [];

  for (var i=0; i<arr.length; i++){
    
    if(arr[i] < 0) {
      arr[i] = 0;
      positiveArry.push(arr[i])
    }
    else {
      positiveArry.push(arr[i])
    }
  }
  return positiveArry;
}
console.log(arrPositive([1,5,10,-2]))

// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function arrStats(arr){
  var maxValue = 0;
  var minValue = maxValue;
  var sumTotal = 0;
  var average = 0;
  var finalArr = [];

  for (var i=0; i<arr.length; i++){
    if (arr[i] > maxValue){
      maxValue = arr[i];
    }
    
    if (arr[i] < minValue){
      minValue = arr[i];
    }
    
    sumTotal += arr[i];
    average = sumTotal/arr.length;
    
  }
  finalArr.push(maxValue)
  finalArr.push(minValue)
  finalArr.push(average)
  return finalArr;
}
console.log(arrStats([1,5,10,-2]))

// 12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function valueSwap(arr){

  var firstValue = 0;
  var lastValue = 0;
  var newArr = [];
  var maxLgth = 0;
  //var arr = [1,5,10,-2];

  for (var i=0; i<arr.length; i++){
    maxLgth = arr.length - 1;
   
    if (i==0){
      firstValue = arr[i];
    }
    if (i==maxLgth){
      lastValue = arr[i];
    }
  }
  arr[0] = lastValue;
  arr[maxLgth] = firstValue;
  return arr;
  
}
console.log(valueSwap([1,5,10,-2]))

// 13. Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function arrDojo(arr){

  for (var i=0; i<arr.length; i++){
    if(arr[i] < 0){
      arr[i] = "Dojo";
    }
  }
  return arr;
}
console.log(arrDojo([-1,-3,2]))