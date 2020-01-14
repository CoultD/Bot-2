const {GoogleApi, cseID} = require("../config.json");
const imageSearch = require('image-search-google');
const options = {page:1};
const google = new imageSearch(cseID, GoogleApi);

module.exports = function(args, message){
    if(args.length === 0)return;
    google.search(args.join(" "), options)
    .then(images => {
        if(images.length === 0)return;
        console.log(images)
        return message.channel.send(images[0].url)
    }) 
}