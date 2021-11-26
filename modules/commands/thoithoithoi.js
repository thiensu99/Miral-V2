const fs = require("fs");
module.exports.config = {
	name: "bốc phét",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Thiên Sứ", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "bốc phét ít thôi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bốc phét")==0 || (event.body.indexOf("Bốc phét")==0 || (event.body.indexOf("Phét")==0 || (event.body.indexOf("M đừng có mà bốc phét")==0)))) {
		var msg = {
				body: "thôi thôi thôi...!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/thoithoithoi.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}