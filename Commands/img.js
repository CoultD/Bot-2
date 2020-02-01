const GoogleApi = process.env.GoogleApi;
const cseID = process.env.cseID;
const imageSearch = require('image-search-google');
const options = {page:1, type:"safe"};
const google = new imageSearch(cseID, GoogleApi);
const { RichEmbed } = require('discord.js');

module.exports = class ImageCommand {
    constructor(){
        this.storage = []
        this.message = null
    }
    run(args, message){
        if(args.length === 0)return;
        google.search(args.join(" "), options)
        .then(async results => {
            if(results.length === 0)return;
            const embed = new RichEmbed().setAuthor(message.author.username).setDescription("`$n` for next image").setImage(results[0].url)
            console.log(results)
            this.message = await message.channel.send("", embed)
            this.storage = results
        })
    }
}