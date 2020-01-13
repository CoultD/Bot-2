const play = require('./play')
const yt = require('./youtube-search')
const resume = require('./resume')
const pause = require('./pause')
const help = require('./help')
const img = require('./img')
const depression = require('./depression')
const Discord = require('discord.js')
const roll = require('./roll')
module.exports = function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let args = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + args) // There may not be any arguments

    if(primaryCommand == "help") {
        help(args,receivedMessage)
    }
    if(primaryCommand == "img") {
        img(args,receivedMessage)
    }
    if (primaryCommand == "depression") {
        depression(args, receivedMessage)
    }
    if (primaryCommand == "play") {
        play(args, receivedMessage)
    }
    if (primaryCommand == "pause") {
        pause(args, receivedMessage)
    }
    if (primaryCommand == "resume") {
        resume(args, receivedMessage)
    }
    if (primaryCommand == "yt"){
        yt(args, receivedMessage)
    }
    if (primaryCommand == "roll"){
        roll(args, receivedMessage)
    }
}