module.exports.config = { 	
  name: "quà", 	
  version: "1.0.0", 	
  hasPermssion: 0, 	
  credits: "Hoàng", 
  description: "Nhận quà phờ ri từ bot.",
  commandCategory: "Quà",
  usages: "", 	
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) { 
  var info = await api.getThreadInfo(event.threadID); 
  if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
   return api.sendMessage('Để quà thì thêm bot làm qtv\n\nkhông thể nhận quà vì chưa làm cho bot làm qtv ', event.threadID, event.messageID); 
  var threadInfo = await api.getThreadInfo(event.threadID)   
    {     	   api.removeUserFromGroup(event.senderID, event.threadID)     } api.sendMessage(`Này thì quà. Quà với chúng tôi =))😼`, event.threadID); }