
module.exports.config = {
    name: "Toang",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "ĐTS",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "Toang",
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
                body: `𝑻𝒐𝒂𝒏𝒈 𝒓𝒐̂̀𝒊 ${name} 𝒂̣ 😖`,
                attachment: fs.createReadStream(__dirname + `/noprefix/toang.mp4`)
            }
    if (event.body.toLowerCase() == "Toang"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hơi toang"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "toang"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Hơi toang"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Toang rồi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }