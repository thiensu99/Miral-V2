module.exports.config = {
	name:"chest",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thiên Sứ",
	description: "Random-img 18+",
	commandCategory: "random-img",
	usages: "chest",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.leanhtruong.net/v2/image.php?api_key=leanhtruong&image=du').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/chest.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/chest.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/chest.${ext}`)).on("close", callback);
			})
}