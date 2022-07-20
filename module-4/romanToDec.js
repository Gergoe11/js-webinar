/**
 * It receives a Roman number (as string)
 * and converts it to its Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 * 
 * -should print out a message if the argument is not string
 * -should print out a message if the argument is not a valid roman number
 */

const { __esModule } = require("cucumber");

const converter = {"M":1000, "D":500, "C":100, "L": 50, "X":10, "V":5, "I":1}

function romanToDec (roman){
        
    if(typeof roman !== "string"){
        return console.warn("Not a string")
    }

   
    for(let i in roman){
        if(roman[i] == "q"){
            return false;
        }
            
    }
     
    
    let array = roman.toUpperCase()
                    .split('');
    let result = 0;
    let current;
    let currentValue;
    let next;
    let nextValue;


    for (let i = 0; i < array.length; i++){
        current = array[i];
        currentValue=converter[current]

        next = array[i+1];
        nextValue = converter[next];
        
        
        if(currentValue<nextValue){
            result = result - (currentValue);
            
        } else {
            result = result + (currentValue);
           
        } 

    }
       
      
        return result;
               
        
     
}

console.log(romanToDec("mdc"))
module.exports = romanToDec;


// !== "m"||"d"||"c"||"l"||"x"||"v"||"i"