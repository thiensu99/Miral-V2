const fs = require("fs");
module.exports.config = {
	name: "cl",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Thiên Sứ", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: " chửi cl",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cl")==0 || (event.body.indexOf("Cl")==0 || (event.body.indexOf("cc")==0 || (event.body.indexOf("Cc")==0)))) {
		var msg = {
				body: " ",
				attachment: fs.createReadStream(__dirname + `/cache/CHUIBOT/chuithe.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}