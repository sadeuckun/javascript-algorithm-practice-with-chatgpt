function averageArray(arr) {
    // your code here

    /* if(arr.length === 0) return 0;
    let sum = 0;

    for(let i of arr) {
        sum+=i;
    }

    return sum/arr.length;
    */

    // ----- BEST PRACTICE ----- //
    return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b, 0) / arr.length;
  }
  
  // Test cases
  console.log(averageArray([1, 2, 3, 4, 5])); // 3
  console.log(averageArray([10, 20, 30]));    // 20
  console.log(averageArray([5]));             // 5
  console.log(averageArray([]));              // 0
  