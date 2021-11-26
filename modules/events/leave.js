module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người rời khỏi nhóm",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "Đ𝑎̃ ℎ𝑜̂̀𝑛 𝑏𝑎𝑦 9 𝑣𝑖́𝑎" : "Đ𝑎̃ ℎ𝑜̂̀𝑛 𝑏𝑎𝑦 9 𝑣𝑖́𝑎";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `leave.gif`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = " {name} {type} 𝑑𝑜 𝑛𝑔ℎ𝑖𝑒̣̂𝑝 𝑐ℎ𝑢̛́𝑛𝑔 𝑛𝑎̣̆𝑛𝑔 𝑞𝑢𝑎́ 𝑡𝑢̛𝑜̛𝑛𝑔 𝑡𝑎́𝑐 𝑛ℎ𝑖𝑒̂̀𝑢 𝑐𝑢̃𝑛𝑔 𝑘ℎ𝑜̂𝑛𝑔 𝑡ℎ𝑒̂̉ 𝑛𝑎̀𝑜 𝑑𝑎̂̀𝑢 𝑡ℎ𝑎𝑖 𝑡ℎ𝑎̀𝑛ℎ 𝑛𝑔𝑢̛𝑜̛̀𝑖 𝑑𝑢̛𝑜̛̣𝑐. 𝐶ℎ𝑢́𝑐 𝑏𝑎̣𝑛 {name} 𝑐𝑜̂́ 𝑔𝑎̆́𝑛𝑔 𝑥𝑜𝑎́ 𝑏𝑜̛́𝑡 𝑛𝑔ℎ𝑖𝑒̣̂𝑝 𝑑𝑒̂̉ 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑑𝑎̂̀𝑢 𝑡ℎ𝑎𝑖. 𝐻𝑒̣𝑛 𝑔𝑎̣̆𝑝 𝑙𝑎̣𝑖 {name} ._.\n𝐺𝑢́𝑡 𝑏𝑎𝑖 𝑇ℎ𝑎̆̀𝑛𝑔 𝑎̂́𝑡 𝑜̛ 𝑛ℎ𝑒́ ☃️☃️" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}