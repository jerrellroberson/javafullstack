//Print odds 1-20
//Print out all odd numbers from 1 to 20
//The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

for (var n=1; n<=20; n+=2){
  console.log(n)
}



//Sum and Print 1-5
//Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
//The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15
//Sum: 1,3,6,10,15
//Increase: 2,3,4,5

var increase = 0; 
var sum = 0;
for (var num=1; num<=5; num++){
  console.log("Num: " + num)
  //console.log("Sum: " + (num + increase))
  sum += num;
  console.log("Sum: " + sum)
  //increase++;

}