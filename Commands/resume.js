const ytdl = require('ytdl-core')
module.exports = function(arguments, receivedMessage) {
    if(receivedMessage.guild && receivedMessage.guild.voiceConnection){
        receivedMessage.guild.voiceConnection.dispatcher.resume()
    } 
}