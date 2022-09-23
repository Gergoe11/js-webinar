/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in an array, using the console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 * 
 * - should print out a message if the length of two arrays are different, with different lengths
 * - should print out a message if two elements are different, with the different elements'
 */

function equal(first, second) {
        if(first.length !== second.length){
            console.warn(`Arrays' length not eq., 1st is ${first.length} and 2nd ${second.length}`);
            return false;
        }

        for(let i = 0; i < first.length; i++){
            let firstsItem= first[i];
            let secondsItem= second[i];

            

            if (Array.isArray(firstsItem) && Array.isArray(secondsItem)){
               let itemsequal = equal(firstsItem, secondsItem);
               if(itemsequal) {
                return true;
               }
            }

            if(firstsItem !== secondsItem){
                console.warn(`Items differ, 1st is ${firstsItem} and 2nd ${secondsItem}`)
                return false;
            }

           

        }

        return true;

    }






module.exports = equal
