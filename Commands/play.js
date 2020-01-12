const {GoogleApi} = require("../config.json");
const play = require("./play")
const ytdl = require('ytdl-core')
const search = require('youtube-search');
const validUrl = require('valid-url');

var queue = []
var playing = false
const streamOptions = { seek: 0, volume: 0.2, passes: 2 };
module.exports = async function(args, receivedMessage) {
    const joinedArgs = args.join(" ");
    if(validUrl.isUri(joinedArgs)){
        queue.push({url:joinedArgs, message:receivedMessage})
    }else{
        const opts = {
            type:"video",
            maxResults: 3,
            key: GoogleApi
        };
        if(receivedMessage.guild && receivedMessage.member.voiceChannel){
            const linkFinder = await search(joinedArgs, opts)
            queue.push({url:linkFinder.results[0].link, message:receivedMessage})
        }
    }
    if(queue[0] && !playing){
        playNext(queue[0])
    }
}
function playNext(video){
    const url = video.url
    const message = video.message

    if(message.guild && message.member.voiceChannel){
        message.member.voiceChannel.join()
        .then(connection => {
            const broadcast = message.client.createVoiceBroadcast();
            const stream = ytdl(url, {filter: "audioonly"});
            connection.playBroadcast(broadcast, streamOptions);
            broadcast.playStream(stream, streamOptions)
                .on("end", reason => {
                console.log("haha yes this ended")
                playing = false
                queue.shift()
                if(queue[0]){
                    setTimeout(function(){
                        playNext(queue[0])
                    },500)
                    console.log("playing Next: " + queue[0].url) 
                }
            })
            ytdl.getInfo(url)
                .then(info => {
                message.reply("Now playing `" + info.title + "`")
                .catch(console.error);
                })
            playing = true
        })
    }
}