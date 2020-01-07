const {GoogleApi} = require("../config.json");
const play = require("./play")
const ytdl = require('ytdl-core')
const search = require('youtube-search');
module.exports = function(args, receivedMessage) {
  const streamOptions = { seek: 0, volume: 0.3, passes: 1 };
  const broadcast = receivedMessage.client.createVoiceBroadcast();
  const opts = {
    type:"video",
    maxResults: 1,
    key: GoogleApi
  };

  if(receivedMessage.guild && receivedMessage.member.voiceChannel){
    receivedMessage.member.voiceChannel.join()
    .then(connection => {
      search(receivedMessage.content, opts, function(err, results){
        if(err){ 
          console.log(err);
          console.dir(results);
          return
        }
        const stream = ytdl(results[0].link, {filter: 'audioonly'});
        broadcast.playStream(stream, streamOptions);
        const dispatcher = connection.playBroadcast(broadcast, streamOptions);
      })
    });
  };
}