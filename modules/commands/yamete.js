const fs = require("fs");
module.exports.config = {
	name: "Yamate",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ĐTS", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yamate :))",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yamate")==0 || (event.body.indexOf("Yamate")==0)) {
		var msg = {
				body: "Kimochi ư ư !!! :v",
				attachment: fs.createReadStream(__dirname + `/noprefix/yamate.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}