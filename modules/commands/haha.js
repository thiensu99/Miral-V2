const fs = require("fs");
module.exports.config = {
	name: "Haha",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ĐTS", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Thầy ba cười ẻ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("haha")==0 || (event.body.indexOf("Haha")==0)) {
		var msg = {
				body: "Cười ẻ :))))))) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/thaybacuoi.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
}