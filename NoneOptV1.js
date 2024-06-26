/*
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
*/

function countOdds(low, high) {
    let countOdd = 0;
    let arr = [];
    arr[0] = low;
    let highest = arr.length - 1; 
    highest = high;
    for (i = low; i <= high; i++){
        if(i % 2 !== 0){
            countOdd++;
        }
    }

    return countOdd;
}
