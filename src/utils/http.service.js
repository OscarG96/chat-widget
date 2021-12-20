const axios = require('axios');
const URL = "http://localhost:3000"


export function addNewUser(username, useremail) {
    axios.post(`${URL}/user/createuser`, {
        name: username, 
        email: useremail
    }).then(() => console.log('user created'), (message) => console.warn('something failed', message))
    .catch(error => console.error(error))
}