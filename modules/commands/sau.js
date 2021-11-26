const fs = require("fs");
module.exports.config = {
	name: "Sầu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Thiên Sứ", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Sầu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sầu")==0 || (event.body.indexOf("sầu")==0 || (event.body.indexOf("Sồu")==0 || (event.body.indexOf("sồu")==0)))) {
		var msg = {
				body: "𝑺𝒂̂̀𝒖 𝒍𝒂̀𝒎 𝒈𝒊̀ ? 𝑸𝒖𝒂̂̉𝒚 𝒗𝒐̛́𝒊 𝒃𝒐𝒕 𝒏𝒂̀𝒚^^",
				attachment: fs.createReadStream(__dirname + `/noprefix/sau.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}