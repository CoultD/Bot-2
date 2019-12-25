const {GoogleApi, cseID} = require("../config.json");
const imageSearch = require('image-search-google');
const google = new imageSearch(cseID, GoogleApi);
module.exports = function(arguments, receivedMessage){
    if(arguments = primaryCommand)
    google.search('APJ Abdul kalam', options)
.then(images => {
    
    [{
        'url': item.link,
        'thumbnail':item.image.thumbnailLink,
        'snippet':item.title,
        'context': item.image.contextLink
    }]
    
})
}