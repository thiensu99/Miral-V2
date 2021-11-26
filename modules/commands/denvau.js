const fs = require("fs");
module.exports.config = {
	name: "Đen vâu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ĐTS", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Đen Vâu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("đen")==0 || (event.body.indexOf("Đen")==0)) {
		var msg = {
				body: "Đi về nhà ",
				attachment: fs.createReadStream(__dirname + `/noprefix/đen.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}