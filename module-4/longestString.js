/**
 * It receives an array of strings and returns
 * the first longest string from it.
 * Also, in the alphabetically first in case of more.
 *
 * @param {string[]} strings
 * @returns {string} longest string or empty string in other cases
 */

const { __esModule } = require("cucumber");

//let strings = [true, "hello", "world"]

 function longestString(strings){
    if (typeof strings === "string" || strings.length < 2){
        return "";
    }

    strings.sort();
    strings.sort((a,b) => b-a);
    console.log(strings)
    
   

    return strings[0];
    

}



module.exports = longestString;