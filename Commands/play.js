const ytdl = require('ytdl-core')
module.exports = function(args, receivedMessage) {
    const streamOptions = { seek: 0, volume: 0.3, passes: 1 };
    const broadcast = receivedMessage.client.createVoiceBroadcast();

    if(receivedMessage.guild && receivedMessage.member.voiceChannel){
        receivedMessage.member.voiceChannel.join()
        .then(connection => {
            const stream = ytdl(args.join(" "), {filter: 'audioonly'});
            broadcast.playStream(stream, streamOptions);
            const dispatcher = connection.playBroadcast(broadcast, streamOptions);
        })
        .catch(console.error);
    }
}