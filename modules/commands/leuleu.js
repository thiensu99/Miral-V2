const fs = require("fs");
module.exports.config = {
	name: "lêu lêu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Thiên Sứ", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "lêu lêu đồ chó",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lêu")==0 || (event.body.indexOf("Lêu")==0 || (event.body.indexOf("liu")==0 || (event.body.indexOf("Liu")==0)))) {
		var msg = {
				body: "𝐿𝑒̂𝑢 𝑙𝑒̂𝑢 𝑑𝑜̂̀ 𝑐ℎ𝑜́...!",
				attachment: fs.createReadStream(__dirname + `/noprefix/leuleu.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}