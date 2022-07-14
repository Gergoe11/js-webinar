/**
 * It receives an elementsay of strings, integers and
 * elementsays, like itself.
 * Return the summary of all integers in it on
 * any level.
 *
 * @param {elementsay} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
//let elements= [1, 2, "3", 4, false, 6];


    module.exports = function arraySum(elements){
    
    
       
    let sum = 0;
    for(let i = 0; i < elements.length; i++){
        if(typeof elements[i] === "number"){
        sum = sum + elements[i];


        } else if(Array.isArray(elements[i])){
            sum = sum + arraySum(elements[i]);
        }

        
    }
    return sum;

    }
    

    

