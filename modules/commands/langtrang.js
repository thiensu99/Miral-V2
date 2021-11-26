module.exports.config = {
  name: "langtrang",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thiên Sứ",
  description: "Random ảnh ACE làng trăng",
  commandCategory: "hình ảnh",
  usages: "langtrang",
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
"https://i.imgur.com/z10ZJ6E.jpg",
"https://i.imgur.com/eCHoPTt.jpg",
"https://i.imgur.com/O0XEynJ.jpg",
"https://i.imgur.com/LcI1b1Y.jpg",
"https://i.imgur.com/nvnRcfR.jpg",
"https://i.imgur.com/1d8gv52.jpg",
"https://i.imgur.com/zHLCLUK.jpg",
"https://i.imgur.com/HbfeMVe.jpg",
"https://i.imgur.com/AhcqLwJ.jpg",
"https://i.imgur.com/vAoaQR9.jpg",
"https://i.imgur.com/myvUvEs.jpg",
"https://i.imgur.com/ngAo0CY.jpg",
"https://i.imgur.com/dKIviGX.jpg",
"https://i.imgur.com/txAmWY8.jpg",
"https://i.imgur.com/XeoqcNH.jpg",
"https://i.imgur.com/uoWPY1T.jpg",
"https://i.imgur.com/TY5MrYc.jpg",
"https://i.imgur.com/UUwZs1K.jpg",
"https://i.imgur.com/wqcwKtz.jpg",
"https://i.imgur.com/SfW2GUz.jpg",
"https://i.imgur.com/0eyjEti.jpg",
"https://i.imgur.com/sEfTFD7.jpg",
"https://i.imgur.com/PCEswZu.jpg",
"https://i.imgur.com/byx8Utw.jpg",
"https://i.imgur.com/2iwEbR5.jpg",
"https://i.imgur.com/xjMSzLl.jpg",
"https://i.imgur.com/olTXd4n.jpg",
"https://i.imgur.com/vhXL5mx.jpg",
"https://i.imgur.com/giP69mW.jpg",
"https://i.imgur.com/7jaNmsR.jp",
"https://i.imgur.com/L1m4N6A.jpg",
"https://i.imgur.com/XxP79oS.jpg",
"https://i.imgur.com/H5xgDeh.jpg",
"https://i.imgur.com/gWkH5pg.jpg",
"https://i.imgur.com/zv2k7tk.jpg",
"https://i.imgur.com/zUixYiU.jpg",
"https://i.imgur.com/T2UeyiH.jpg",
"https://i.imgur.com/xO9hBWp.jpg",
"https://i.imgur.com/OcQbolO.jpg",
"https://i.imgur.com/bgps2mE.jpg",
"https://i.imgur.com/x0ekjEA.jpg",
"https://i.imgur.com/C5xgE8E.jpg",
"https://i.imgur.com/2DfZ0mr.jpg",
"https://i.imgur.com/AUefJv0.jpg",
"https://i.imgur.com/PJM1HdY.jpg",
"https://i.imgur.com/MKO5WdQ.jpg",
"https://i.imgur.com/UDWMMSC.jpg",
"https://i.imgur.com/kNzR5B8.jpg",
"https://i.imgur.com/i2QS3bn.jpg",
"https://i.imgur.com/ItrGydB.jpg",
"https://i.imgur.com/U4LCxQI.jpg",
"https://i.imgur.com/BKmla2c.jpg",
"https://i.imgur.com/YkZfEUC.jpg",
"https://i.imgur.com/URZLrRk.jpg",
"https://i.imgur.com/cGrU5ph.jpg",
"https://i.imgur.com/NsBg3E2.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Bạn cần 0 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`🌸 Làng trăng xịnn 🐸`,attachment: fs.createReadStream(__dirname + "/cache/7.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/7.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/7.jpg")).on("close",() => callback());
   }
};