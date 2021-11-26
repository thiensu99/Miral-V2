const fs = require("fs");
module.exports.config = {
	name: "Vcl",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ĐTS", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "vcl",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Vc")==0 || (event.body.indexOf("vc")==0)) {
		var msg = {
				body: "vãi nồi :)) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/vcl.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}