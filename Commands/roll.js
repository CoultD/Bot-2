module.exports = function(args, receivedMessage) {

    if(receivedMessage.guild && receivedMessage.channel){
        const joinedArgs = parseInt(args.join(" "),10)
        receivedMessage.reply(":game_die:  `" + Math.floor(Math.random() * Math.floor(joinedArgs) +1)+ "`")
    }
}