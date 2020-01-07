const Discord = require("discord.js")
module.exports = function(args, receivedMessage) { 
    const attachment = new Discord.Attachment("emote.png")
    receivedMessage.channel.send(attachment)
}