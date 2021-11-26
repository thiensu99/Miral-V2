module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100006272490820") {
    var aid = ["100006272490820"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Đã bảo đừng tag Admin, tao gọi 500 ae xiên mày bây giờ 😠","Ông chủ đang đi bay với thầy Huấn tag nữa tao đấm đấy 🙃"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }