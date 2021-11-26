module.exports.config = {
  name: "sexyfamily",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thiên Sứ",
  description: "Random ảnh Box",
  commandCategory: "Random-img Box",
  usages: "sexyfamily",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/1I3ssl9.jpg",
"https://i.imgur.com/hMuAMYa.jpg",
"https://i.imgur.com/if5OPJg.jpg",
"https://i.imgur.com/krUdbDH.jpg",
"https://i.imgur.com/Wn9p7mm.jpg",
"https://i.imgur.com/uDIGAHk.jpg",
"https://i.imgur.com/VuONYcT.jpg",
"https://i.imgur.com/fl8INAO.jpg",
"https://i.imgur.com/tr1G7X4.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1) api.sendMessage("Bạn cần 1 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1})
   var callback = () => api.sendMessage({body:`Thành viên box SexyFamily❤️‍🔥\nDemo... 7749 ngày nữa hoàn thiện 🥴`,attachment: fs.createReadStream(__dirname + "/cache/7.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/7.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/7.jpg")).on("close",() => callback());
   }
};