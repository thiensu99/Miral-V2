const fs = require("fs");
module.exports.config = {
	name: "lixi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ĐTS", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "lì xì cái lol",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lì xì")==0 || (event.body.indexOf("Lì xì")==0)) {
		var msg = {
				body: "Có cái lol :v ",
				attachment: fs.createReadStream(__dirname + `/noprefix/lixicailol.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}