/**
 * It returns the property names of the given object.
 * 
 * @param {object} o the object
 * @returns {string[]} the list of the properties of the object
 *                     or empty array if it is not an object
 */

let obj = {
    a: 11,
    c: "hello"
}


function properties(o){

    if(typeof o !== "object"){
        return [];
    } else{
        return Object.keys(o);
    }



}

console.log(properties(obj));





module.exports = properties;