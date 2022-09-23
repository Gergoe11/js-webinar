/*
 * Rewrite the following code to use async/await 
 */
module.exports = async function loadJson(url){
    let response = await fetch(url);

    if (response.status == 200){
        return await response.json();
    } else {
        throw new Error(response.status + "Server/client error response")
    }
    
        
};



/*
 return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
        */