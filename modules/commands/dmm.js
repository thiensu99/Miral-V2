const fs = require("fs");
module.exports.config = {
	name: "Đmm",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ĐTS", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Đmm",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("đmm")==0 || (event.body.indexOf("Đmm")==0)) {
		var msg = {
				body: "Đuỵt con mẹ mày nhờn à :)) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/dmm.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}