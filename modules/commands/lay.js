const fs = require("fs");
module.exports.config = {
	name: "lạy",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Thiên Sứ", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "tao lạy m",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lạy")==0 || (event.body.indexOf("Lạy")==0 || (event.body.indexOf("T lạy")==0 || (event.body.indexOf("t lạy")==0)))) {
		var msg = {
				body: "𝐍𝐠𝐨̂̀𝐢 𝐧𝐠𝐚𝐲 𝐧𝐠𝐚̆́𝐧 𝐧𝐡𝐚̣̂𝐧 𝐜𝐮̉𝐚 𝐞𝐦 𝟏 𝐥𝐚̣𝐲 𝐧𝐞̀..!",
				attachment: fs.createReadStream(__dirname + `/noprefix/taolaymay.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}