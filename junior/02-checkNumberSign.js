function checkNumberSign(n) {
    // your code here
    if (n === 0) return 'zero'
    return n < 0 ? 'negative' : 'positive'
  }
  
  // Test cases
  console.log(checkNumberSign(5));    // "positive"
  console.log(checkNumberSign(-3));   // "negative"
  console.log(checkNumberSign(0));    // "zero"
  console.log(checkNumberSign(100));  // "positive"
  console.log(checkNumberSign(-1));   // "negative"
  