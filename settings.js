require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6283822455492"
global.namaowner = "ZARXDOFFICIAL"

//======== Setting Bot & Link ========//
global.namabot = "ZARXD OFFICIAL" 
global.namabot2 = "ZARXDOFFICIAL"
global.foother = "ZARXDOFFICIAL"
global.idsaluran = "120363313255786174@newsletter"
global.linkgc = "https://chat.whatsapp.com/LK9F3UZMJOfCdZpKsmujiw"
global.linksaluran = "https://whatsapp.com/channel/0029Valt9cOCMY0Pdcm3Mc0L"
global.linkyt = 'https://www.youtube.com/@800persen'
global.linktele = "t.me/zarxd1"
global.packname = "ZARXDOFFICIAL"
global.author = "ZARXDOFFICIAL"

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = false 
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""
false
//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "-"
global.gopay = "-"
global.ovo = "-"
global.qris = fs.readFileSync("./media/qris.jpg")
                             
//=========== Api Domain ===========//
global.zone1 = "";
global.apitoken1 = "";
global.tld1 = ""

//========== Api Domain 2 ==========//
global.zone2 = "";
global.apitoken2 = "";
global.tld2 = "";
//========== Api Domain 3 ==========//
global.zone3 = "";
global.apitoken3 = "";
global.tld3 = "";
//========== Api Domain 4 ==========//
global.zone4 = "";
global.apitoken4 = "";
global.tld4 = "";

//========= Setting Message =========//
global.msg = {
"error": "Error terjadi kesalahan",
"done": "Done Bang ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})