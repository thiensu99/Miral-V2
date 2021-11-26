module.exports.config = {
name: "lyrics",
    version: "1.0.0",
hasPermssion: 0,
credits: "LTChi",
description: "Xem lời bài hát.",
commandCategory: "Tiện lợi",
usages: "[Tên bài hát]",
cooldowns: 5
};
module.exports.run = async function ({ api, args, event }) {
  const lyricsFinder = require('lyrics-finder');
    let lyrics = await lyricsFinder(args.join(" ")) || "Không tìm thấy lời bài hát này !";
    console.log(lyrics);
api.sendMessage(`${lyrics}`, event.threadID, event.messageID);
}



