const fs = require("fs");
module.exports.config = {
	name: "Sợ",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Thiên Sứ", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Bố lại sợ m quá",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sợ")==0 || (event.body.indexOf("sợ")==0 || (event.body.indexOf("Sợ quá")==0 || (event.body.indexOf("sợ quá")==0)))) {
		var msg = {
				body: "𝑺𝒐̛̣ 𝒒𝒖𝒂́ 𝒄𝒐̛...!",
				attachment: fs.createReadStream(__dirname + `/noprefix/bomaysomayqua.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}