function sumArray(arr) {
    // your code here

    // let sum = 0;
    // for(let i of arr){
    //     sum += i;
    // }
    // return sum;

    // ----- BEST PRACTICE ----- //
    return arr.reduce((a, b) => a + b, 0);

  }
  
  // Test cases
  console.log(sumArray([1, 2, 3, 4]));     // 10
  console.log(sumArray([0, -1, 1]));       // 0
  console.log(sumArray([]));               // 0
  console.log(sumArray([100]));            // 100
  console.log(sumArray([-5, -10, 5]));     // -10
  