const fs = require("fs");
module.exports.config = {
	name: "quê",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ĐTS", 
	description: "no prefix",
	commandCategory: "không cần dấu lệnh",
	usages: "quê vl",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Quê")==0 || (event.body.indexOf("quê")==0)) {
		var msg = {
				body: "chữ ê kéo dàiiiiii :)) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/quêvl.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}