/*
You are given two integer arrays of equal length target and arr. 
In one step, you can select any non-empty subarray of arr and reverse it.
You are allowed to make any number of steps.
Return true if you can make arr equal to target or false otherwise.

Example 1:

Input: target = [1,2,3,4], arr = [2,4,1,3]
Output: true
Explanation: You can follow the next steps to convert arr to target:
1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
2- Reverse subarray [4,2], arr becomes [1,2,4,3]
3- Reverse subarray [4,3], arr becomes [1,2,3,4]
There are multiple ways to convert arr to target, this is not the only way to do so.

Example 2:

Input: target = [7], arr = [7]
Output: true
Explanation: arr is equal to target without any reverses.

Example 3:

Input: target = [3,7,9], arr = [3,7,11]
Output: false
Explanation: arr does not have value 9 and it can never be converted to target.

*/

function canBeEqual(target, arr) {
    if (target.length !== arr.length) return false;

    const countMap = {};

    // Count the frequency of each element in the target array 
    /*for (let i = 0; i < target.length; i++) {
        countMap[target[i]] ||= 0;
        countMap[target[i]]++;
    } */
    for (let i = 0; i < target.length; i++) {
        countMap[target[i]] = (countMap[target[i]] || 0) + 1; //countMap[target[i]] = (countMap[target[i]] ?? 0) + 1;
    }

    // Subtract the frequency based on elements in the arr array
    for (let i = 0; i < arr.length; i++) {
        if (!countMap[arr[i]]) {
            return false; // Element in arr not found in target or excess count
        }
        countMap[arr[i]]--;
    }

    return true;
}
