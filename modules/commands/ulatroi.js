const fs = require("fs");
module.exports.config = {
	name: "ulatroi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "U là trời ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ulatroi")==0 || (event.body.indexOf("Ulatr")==0)) {
		var msg = {
				body: "𝑼 𝒍𝒂̀ 𝒕𝒓𝒐̛̀𝒊 🙄🙄",
				attachment: fs.createReadStream(__dirname + `/noprefix/ulatroi.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}