/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */
// should handle incorrect values
// should wait at most 10 seconds"
// should wait given seconds

module.exports = async function sleep(sec) {
    return new Promise((resolve, reject) => {
        if(typeof sec === "number" ){
    // let sec = 10;        
            setTimeout (resolve, 1000*sec) 
        } else {
            reject(new Error("wrong input"))
        }

        
    }
)};



/*
 return new Promise((resolve, reject) => {
        if(typeof sec !== "number" ){
           reject throw new Error()
        }
        else if(sec !== 10){
            throw new Error()
        }

        setTimeout(() => resolve(), 1000 *sec )
        */
