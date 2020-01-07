module.exports = function(args, receivedMessage) {
    if(receivedMessage.guild && receivedMessage.guild.voiceConnection){
        receivedMessage.guild.voiceConnection.dispatcher.resume()
    } 
}