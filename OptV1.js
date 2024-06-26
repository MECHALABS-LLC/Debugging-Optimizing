/*
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
*/

/* 
To solve the problem of counting the odd numbers between two non-negative integers low and high (inclusive) using JavaScript, 
you can use a straightforward approach by iterating through each number in the range and checking if it is odd.
However, there's a more efficient way to achieve this by utilizing mathematical properties.
*/

function countOdds(low, high) {
    // If both low and high are odd, we need to include both of them
  
    if (low % 2 === 0) { //If low is even, we increment it by 1 to make it odd.
        low += 1;
    }
    if (high % 2 === 0) { //If high is even, we decrement it by 1 to make it odd.
        high -= 1;
    }

    if (low > high) { //After adjusting, if low is greater than high, it means there are no odd numbers in the range, so return 0.
        return 0;
    }

    // Calculate the number of odds in the inclusive range [low, high]
    return Math.floor((high - low) / 2) + 1; //When both low and high are odd, every second number between them will be odd.
                                             //For example, if low is 3 and high is 9, the sequence is 3, 4, 5, 6, 7, 8, 9. The odd numbers are 3, 5, 7, and 9.
                                             //The number of elements in the sequence 3 to 9 is (9−3)+1=7
                                             //Half of these elements are odd: 7/2=3.5
                                             //Since we are counting discrete elements, we take the floor of this value and add 1 to account for the inclusive nature of the range.
}

/* Example usage:
console.log(countOdds(3, 7));  // Output: 3 (3, 5, 7)
console.log(countOdds(8, 10)); // Output: 1 (9)
console.log(countOdds(3, 3));  // Output: 1 (3)
console.log(countOdds(2, 2));  // Output: 0 (no odd numbers between 2 and 2)
*/
