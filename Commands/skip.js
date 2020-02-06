const play = require("./play")
module.exports = function(args, message) {
    if(message.guild && message.guild.voiceConnection){
        if(message.guild && message.member.voiceChannel){
        play.broadcastStream.end()
        }
    }
}