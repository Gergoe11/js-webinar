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





/*
  let ignoreArray = (ignore || '').split('');
       let whitespaces = [' ', '\n', '\t'];
       items = items.map(item => {
        let splittedItem = item.toString().split('');
        return splittedItem.filter(char => !ignoreArray.includes(char) && !whitespaces.includes(char)).join('');
       });

       for(let i = 0; i < items.length -1; i++){
        let a = items[i].toString().toLowerCase();
        let b = items[i+1].toString().toLowerCase();

        if (a>b){
            return false;
        }
       }
       return true;

*/

