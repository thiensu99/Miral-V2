//module cho mấy thằng lười đăng ký api
module.exports.config = {
    name: "covid",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "JustGon", //Giữ Credit tôn trọng thằng làm ra
    description: "Lấy thông tin tình hình dịch covid của một nước nào đó bằng tên Tiếng Anh.",
    commandCategory: "Covid",
    usages: "[country]",
    cooldowns: 5,
    dependencies: {
    }
};
module.exports.run = async function ({ event, api, args }) {
    var axios = require("axios");
    var fs = require("fs")
    var request = require("request")
    if (!args[0]) {
    let { data } = await axios.get('https://disease.sh/v3/covid-19/countries/vietnam')
    var nhiemvn = data.cases,
        chetvn = data.deaths,
        khoibenh = data.recovered,
        xetnhiem = data.tests
        danso = data.population,
        chauluc = data.continent
        flag = data.countryInfo.flag
        api.sendMessage({
            body: '🇻🇳Việt Nam🇻🇳\n\n' + `➩ Nhiễm: ${nhiemvn}\n` + `➩ Tử vong: ${chetvn}\n` + `➩ Khỏi bệnh: ${khoibenh}\n` + `➩ Xét nghiệm: ${xetnhiem}\n` + `➩ Dân số: ${danso}\n` + `➩ Châu lục: ${chauluc}\n`,
            attachment: (await axios({
                url: flag,
                method: "GET", 
                responseType: "stream"
            })).data
        }, event.threadID ,event.messageID);
    } else {
    try {
        var location = args.join(" ")
        let { data } = await axios.get(`https://disease.sh/v3/covid-19/countries/${location}`)
        var nhiemvn = data.cases,
        chetvn = data.deaths,
        khoibenh = data.recovered,
        xetnhiem = data.tests
        danso = data.population,
        chauluc = data.continent
        flag = data.countryInfo.flag
        api.sendMessage({
            body: `❄${data.country}❄\n\n` + `➩ Nhiễm: ${nhiemvn}\n` + `➩ Tử vong: ${chetvn}\n` + `➩ Khỏi bệnh: ${khoibenh}\n` + `➩ Xét nghiệm: ${xetnhiem}\n` + `➩ Dân số: ${danso}\n` + `➩ Châu lục: ${chauluc}\n`,
            attachment: (await axios({
                url: flag,
                method: "GET", 
                responseType: "stream"
            })).data
        }, event.threadID ,event.messageID);
    } catch {
    api.sendMessage("Không tìm thấy nước này", event.threadID, event.messageID)
    }
    }
}
