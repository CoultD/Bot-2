const {GoogleApi, cseID} = require("../config.json");
const imageSearch = require('image-search-google');
const options = {page:1};
const google = new imageSearch(cseID, GoogleApi);

module.exports = function(arguments, receivedMessage){
    if(arguments.length === 0){return}
    google.search(arguments.join(" "), options)
    .then(images => {
        if(images.length === 0){return}
console.log(images)
return receivedMessage.channel.send(images[0].url)
    })
    
}