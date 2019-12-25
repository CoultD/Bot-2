const help = require('./help')
const img = require('./img')
const depression = require('./depression')
const Discord = require('discord.js')
module.exports = function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if(primaryCommand == "help") {
        help(arguments,receivedMessage)
    }
    if(primaryCommand == "img"){
        img(arguments,receivedMessage)
    }
    if (primaryCommand == "depression") {
        depression(arguments, receivedMessage)
     }
   
}