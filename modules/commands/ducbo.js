const fs = require("fs");
module.exports.config = {
	name: "Đức bo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ĐTS", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Đức Bo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Đức bo")==0 || (event.body.indexOf("đức bo")==0)) {
		var msg = {
				body: "duck bo của m nè 🤭 ",
				attachment: fs.createReadStream(__dirname + `/noprefix/ducbo.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}