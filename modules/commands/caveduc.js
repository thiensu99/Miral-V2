/**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "caveduc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "Random Ảnh Cave Vn",
  commandCategory: "Random-img 18+",
  usages: "caveduc",
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
"https://i.imgur.com/ch2MTz3.jpg",
"https://i.imgur.com/1oboEq8.jpg",
"https://i.imgur.com/mBep8FX.jpg",
"https://i.imgur.com/Pgbdgia.jpg",
"https://i.imgur.com/TJ26oG4.jpg",
"https://i.imgur.com/HYgGIfI.jpg",
"https://i.imgur.com/nGjrAcZ.jpg",
"https://i.imgur.com/wWorGWe.jpg",
"https://i.imgur.com/DeFqVhn.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 2000) api.sendMessage("Bạn cần 2000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 20})
   var callback = () => api.sendMessage({body:`35k bao phòng lh admin để lấy in4 🥴\n» Số dư: -2000 đô «`,attachment: fs.createReadStream(__dirname + "/cache/7.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/7.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/7.jpg")).on("close",() => callback());
   }
};