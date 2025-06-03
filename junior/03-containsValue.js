function containsValue(arr, value) {
    // your code here

    // if (arr.length === 0) return false;
    
    // for(let i of arr) {
    //     if(i === value) return true;
    // }
    // return false;

    
    // ----- BEST PRACTICE -----
    return arr.includes(value);
  }
  
  // Test cases
  console.log(containsValue([1, 2, 3], 2));       // true
  console.log(containsValue([1, 2, 3], 4));       // false
  console.log(containsValue([], 5));              // false
  console.log(containsValue(["a", "b"], "b"));    // true
  console.log(containsValue(["a", "b"], "c"));    // false
  