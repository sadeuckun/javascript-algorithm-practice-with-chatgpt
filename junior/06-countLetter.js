function countLetter(str, letter) {
    // your code here

    // let count = 0;
    // for(let word of str) {
    //     if(word === letter) {
    //         count++;
    //     }
    // }
    // return count;

    // ----- BEST PRACTICE ----- //
    return [...str].filter(c => c === letter).length;

  }
  
  // Test cases
  console.log(countLetter("hello", "l"));   // 2
  console.log(countLetter("banana", "a"));  // 3
  console.log(countLetter("javascript", "x")); // 0
  console.log(countLetter("", "a"));        // 0
  console.log(countLetter("aaa", "a"));     // 3
  