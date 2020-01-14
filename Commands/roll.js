module.exports = function(args, message) {

    if(message.guild && message.channel){
        const joinedArgs = parseInt(args.join(" "),10)
        message.reply(":game_die:  `" + Math.floor(Math.random() * Math.floor(joinedArgs) +1)+ "`")
    }
}