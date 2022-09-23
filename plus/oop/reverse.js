/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */

const { __esModule } = require("cucumber");

let obj = {
    a: 12,
    b: 23,
    c:12
    

}

function reverse(o){

    if(typeof o !== "object"){
       throw new Error("Not an object!")
    } 

   // let newO = Object.assign({},o);
   //let revO = Object.keys(o).reverse()
   
   let newO = {};

    
     for(let key in o){
         newO[o[key]] = key;
     }
    
     
     return console.log(newO);

          
    }


reverse(obj);




module.exports = reverse;