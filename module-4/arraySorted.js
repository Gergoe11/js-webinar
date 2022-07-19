const { __esModule } = require("cucumber");

/**
 * It determines whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */

function arraySorted(items, ignore){
   let newArray = items.map((item) => {
    return item.toString().replace(/\s/g, "").toLowerCase();
   });

   if(ignore){
    newArray = newArray.map((item) => {
        return item
        .split("")
        .filter((char) => {
            return !ignore.includes(char);
        })
        .join("");
        
    });
   }
     
   for(let i =0; i < newArray.length; i++) {
        if (newArray[i] !== newArray.sort()[i]){
        return false;
    }
   }

   return true;
}



module.exports = arraySorted;







