module.exports.config = {
    name: "Đầu buồi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "ĐTS",
    description: "Đầu buồi",
    commandCategory: "không cần dấu lệnh",
    usages: "Và cái đầu anh là đb",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `𝑽𝒂̀ 𝒄𝒂́𝒊 𝒅𝒂̂̀𝒖 ${name} 𝒍𝒂̀...`,
                attachment: fs.createReadStream(__dirname + `/noprefix/diemnhan.mp4`)
            }
    if (event.body.toLowerCase() == "Đầu buồi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "đầu buồi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Đb"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Cái đầu"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Buồi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }