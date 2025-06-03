function reverseNumber(n) {
    // your code here
    return parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);

  }
  
  // Test cases
  console.log(reverseNumber(123));    // 321
  console.log(reverseNumber(-456));   // -654
  console.log(reverseNumber(1000));   // 1
  console.log(reverseNumber(0));      // 0
  console.log(reverseNumber(-1));     // -1
  