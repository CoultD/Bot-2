const Discord = require('discord.js')
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const google = new imageSearch('016680069834685266942:kgtexi4k1ey', ' AIzaSyDKIJoQklQtYTn-x-jG2-assNAr_-gi7TI');
const imageSearch = require('image-search-google');

client.on('ready', () => {

    client.user.setActivity("Pepe", {type: "PLAYING"})
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })  
})
    client.on('message', receivedMessage => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    if(receivedMessage.content.startsWith(`${prefix}`)){
    processCommand(receivedMessage);
    }
})
    function processCommand(receivedMessage) {
        let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
        let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
        let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
        let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    
        console.log("Command received: " + primaryCommand)
        console.log("Arguments: " + arguments) // There may not be any arguments
        
        if (primaryCommand == "depression") {
           depressionCommand(arguments, receivedMessage)
        }
        if(primaryCommand == "help") {
            helpCommand(arguments,receivedMessage)
        }
        if(primaryCommand == "img"){
            ImageCommand(arguments,receivedMessage)
        }
    }
    function ImageCommand(arguments, receivedMessage){
        if(ImageCommand.arguments = primaryCommand)
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

    function depressionCommand(arguments, receivedMessage){
        const attachment = new Discord.Attachment("emote.png")
        if(depressionCommand.arguments = "depression")
        receivedMessage.channel.send(attachment)
    }
    
    function helpCommand(arguments, receivedMessage){
        if(helpCommand.arguments = "help")
        receivedMessage.channel.send("nigga")
    }

    client.on('message', message => {
        /*if(message.member.hasPermission(["KICK_MEMBERS","BAN_MEMBERS"])) {
            if(message.content.startsWith(`${prefix}kick`)){
                let member = message.mentions.members.first();
                member.kick().then((member) => {
                 message.channel.send(":wave: " + member.displayName + " Has been yotted")
            })
        }
        }*/
        //let generalChannel = client.channels.get("221786958718959616")
        
    if(!message.guild) return;{
    if(message.content === (`${prefix}join`)) {
        if(message.member.voiceChannel){
            message.member.voiceChannel.join()
            .then(connection => {
                message.reply("Joined VC");
            })
            .catch(console.log);
            }else{
                message.reply("Join a VC first");
            }
        }
        
    }
    if(!message.guild) return;{
        if(message.content === (`${prefix}disconnect`)) {
            message.member.voiceChannel.leave()
        }
    }
})
    client.login(token)