/* 
There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.
*/

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function numWaterBottles(numBottles,numExchange) {
    let totalDrank = 0;
    let emptyBottles = 0;
    
    while (numBottles > 0) {
        // Drink all full bottles
        totalDrank += numBottles;
        emptyBottles += numBottles;
        numBottles = 0;
        
        // Exchange empty bottles for full ones
        if (emptyBottles >= numExchange) {
            numBottles = Math.floor(emptyBottles / numExchange);
            emptyBottles = emptyBottles % numExchange;
        }
    }
    
    return totalDrank;
}
