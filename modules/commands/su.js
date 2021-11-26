const fs = require("fs");
module.exports.config = {
	name: "Thiên sứ",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Thiên Sứ", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "admin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("A sứ")==0 || (event.body.indexOf("Thiên sứ")==0 || (event.body.indexOf("A Sứ")==0 || (event.body.indexOf("Sứ ơi")==0)))) {
		var msg = {
				body: "𝑨 𝑺𝒖̛́ 𝒏𝒈𝒖̉ 𝒓𝒐̂̀𝒊. 𝑬𝒎 𝒄𝒖̃𝒏𝒈 𝒏𝒈𝒖̉ 𝒅𝒂̂𝒚, 𝒎𝒂𝒊 𝒏𝒐́𝒊 𝒏𝒉𝒂😬",
				attachment: fs.createReadStream(__dirname + `/noprefix/su.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}