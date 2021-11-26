const fs = require("fs");
module.exports.config = {
	name: "Anh yêu, Em yêu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ĐTS", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yêu đương cc",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Anh yêu")==0 || (event.body.indexOf("Em yêu")==0)) {
		var msg = {
				body: "Con lợn này. yêu cc",
				attachment: fs.createReadStream(__dirname + `/noprefix/gaigu.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}