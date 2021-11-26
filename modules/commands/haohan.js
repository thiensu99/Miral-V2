const fs = require("fs");
module.exports.config = {
	name: "Hảo hán",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ĐTS", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Hảo hán",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hảo")==0 || (event.body.indexOf("Hảo")==0)) {
		var msg = {
				body: "𝑯𝒂̉𝒐 𝒉𝒂̉𝒐👍",
				attachment: fs.createReadStream(__dirname + `/noprefix/haohan.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}