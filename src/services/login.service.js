const jwt = require('jsonwebtoken')


const authenticate = async ({ email, password }) => {
    let item = {email, password};

    let result = await fetch(process.env.baseUrl, {
        method: 'POST',
        headers:{
           "Content-Type":"application/json",
           "Accept":"application/json"
        },
        body:JSON.stringify(item)
        
    });
    result = await result.json();
    return result;
};


module.exports = {
    authenticate
};