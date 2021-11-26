module.exports.config={
name: "thơ",          
version: "1.0.5",
hasPermssion: 0,
credits: "ManhG",
description: "Random thơ ngẫu nhiên.",
commandCategory: "Tiện ích",
usages: "",
cooldowns: 5
},
  module.exports.run=async({api:e,event:o})=>{const s=require("axios");var a=(await s.get("https://le31.glitch.me/poem")).data.data;return console.log(a),e.sendMessage(`${a}  `,o.threadID,o.messageID)};
