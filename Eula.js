module.exports = async (Eula, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//========= CONFIGURASI ==========//
const budy = (typeof m.text == 'string' ? m.text : '')
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const prefix = '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
let { randomBytes } = require("crypto")
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await Eula.decodeJid(Eula.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = m.isGroup ? await Eula.groupMetadata(m.chat).catch(e => {}) : {}
let participant_bot = m.isGroup ? groupMetadata?.participants.find((v) => v.id == botNumber) : {}
let participant_sender = m.isGroup ? groupMetadata?.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson, resize } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")

//========== DATABASE ===========//
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const welcome = JSON.parse(fs.readFileSync('./all/database/welcome.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))

//=========== MESSAGE ===========//
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

//========= FAKE QUOTED =========//

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
caption: `WhatsApp Bot By ${namaowner2}`,
inviteExpiration: Date.now() + 1814400000
}
}}

//========== FUNCTION ===========//
let ppuser
try {
ppuser = await Eula.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}


let example = (teks) => {
return `*Contoh Cara Command :*\nketik *${cmd}* ${teks}`
}


function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

async function EulaReply(teks, mention = []) {
await Eula.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: mention, externalAdReply: {thumbnail: await global.thumb, title: "© Eula Version - Pushkontak", body: `Selamat ${ucapan()}`, 
sourceUrl: linkgc, previewType: "PHOTO"}}}, {quoted: m})
}

//========= SETTING EVENT ========//

if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Eula.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Eula.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: ppuser, title: "乂 Link Grup Terdeteksi", body: "Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
await Eula.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await Eula.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Eula.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Eula.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: ppuser, title: "乂 Link Grup Terdeteksi", body: "Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
await Eula.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}


switch (command) {
case "menu": {
let teksnya = `*Haii* @${m.sender.split("@")[0]}!
Selamat ${ucapan()}

Perkenalkan Saya Adalah *Eula Assistant* By @${owner} Yang Siap Membantu Anda

 *❏ Mainmenu*
* play
* tourl
* yts
* sticker
* ssweb
* pinterest
* qc
  
 *❏ Downloadmenu*
* tiktok
* tiktokmp3
* tiktokaudio
* instagram
* facebook
* ytmp3
* mediafire
  
 *❏ Pushmenu*
* pushkontak
* pushkontak1
* pushkontak2
* savekontak
* savekontak2
* listgc
* idgc
* jpm
* jpm2
* jpmhidetag
* jpmhidetag2

 *❏ Grupmenu*
* addmember
* antilink
* antilinkV2
* hidetag
* tagall
* delete
* open/close
* setgc
* setnamagc
* setdeskgc
* setppgc
* kick
* promote
* leavegc
* leavegc2
* demote
  
 *❏ Ownermenu*
* done
* anticall
* autoread
* autoreadsw
* welcome
* getcase
* setppbotpanjang
* setppbot
* setnamabot
* setbiobot`
Eula.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: mention, externalAdReply: {thumbnail: await global.thumb, title: "© Eula Version - Pushkontak", body: `Selamat ${ucapan()}`, 
sourceUrl: linkgc, previewType: "PHOTO"}}}, {quoted: m})
}
break
case "ch": case "saluran": {
let teks = `
*Saluran Xluzy Store 🚀*
${saluran}
`
Eula.sendText(m.chat, teks, qchanel)
}
break
case "yts": {
if (!text) return EulaReply(example("Utopia"))
await EulaReply(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return EulaReply(mess.error)
let datanew = new Array()
let txt = []
global.tempYts = []
let result = data.all.slice(0,10)
for (let i of result) {
global.tempYts.push({
judul: `${i?.title || "unknown"}`, 
durasi: `${i?.timestamp || "unknown"}`, 
author: `${i.author?.name || "unknown"}`, 
link: i.url, 
image: i.thumbnail
})
txt.push(`* *Judul :* ${i.title}
* *Channel :* ${i.author?.name || "unknown"}
* *Durasi :* ${i?.timestamp || "unknown"}
* *Link Url :* ${i.url}\n\n`)
}
for (let ii = 0; ii < result.length; ii++) {
datanew.push({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "\n"+txt[ii]
}),
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
}),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...(await prepareWAMessageMedia({ image: await fetch(result[ii].thumbnail)}, { upload: Eula.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Vidio\",\"url\":\"${global.tempYts[ii].link}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "🔎 Berikut Adalah Hasil Pencarian Dari *Youtube*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: datanew
})
})}
}}, {userJid: m.sender, quoted: m})
return Eula.relayMessage(m.chat, msgii.message, {
messageId: msgii.key.id
})
}).catch(err => EulaReply(err.toString()))
}
break
case "setppbot": case "setpp": {
if (!isOwner) return EulaReply(msg.owner)
if (/image/g.test(mime)) {
let media = await Eula.downloadAndSaveMediaMessage(qmsg)
await Eula.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
EulaReply("*Berhasil Mengganti Profil ✅*")
} else return EulaReply(example('dengan mengirim foto'))}
break
case "setppbotpanjang": case "setpppanjang": {
if (!isOwner) return EulaReply(msg.owner)
if (/image/g.test(mime)) {
var medis = await Eula.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await Eula.query({
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
EulaReply("*Berhasil Mengganti Profil ✅*")
} else return EulaReply(example('dengan mengirim foto'))
}
break
case "setnamabot": {
if (!isOwner) return EulaReply(msg.owner)
if (!text) return EulaReply(example('teksnya'))
Eula.updateProfileName(text)
EulaReply("*Berhasil Mengganti Nama Bot ✅*")
}
break
case "setbio": case "setbiobot": {
if (!isOwner) return EulaReply(msg.owner)
if (!text) return EulaReply(example('teksnya'))
Eula.updateProfileStatus(text)
EulaReply("*Berhasil Mengganti Bio Bot ✅*")
}
break
case "tts": {
if (!text) return EulaReply(example("Hallo saya manusia"))
if (text.length >= 300) return EulaReply("Jumlah huruf harus di bawah 300!")
EulaReply(msg.wait)
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
Eula.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return EulaReply(e.toString())
}
}
break
case "ytplay": case "play": {
if (!text) return EulaReply(example('Dj tiktok'))
EulaReply(msg.wait)
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
await Eula.sendMessage(m.chat, {audio: fs.readFileSync(temp), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {thumbnailUrl: thumb, title: title, body: "Duration : "+timestamp+" | "+"Author : "+author.name, sourceUrl: url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
await fs.unlinkSync(temp)
} catch (e) {
return EulaReply(e.toString())
}
}
break
case "qc": {
if (!text) return EulaReply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
EulaReply(msg.wait)
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
    let tempnya = "./all/tmp/"+makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return EulaReply("Error")
await Eula.sendStimg(m.chat, tempnya, m, {packname: namabot})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break
case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return EulaReply(example("dengan mengirim foto/vidio"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return EulaReply("Durasi vidio maksimal 15 detik!")
}
EulaReply(msg.wait)
var media = await Eula.downloadAndSaveMediaMessage(qmsg)
await Eula.sendStimg(m.chat, media, m, {packname: namabot})
await fs.unlinkSync(media)
}
break
case "tourl": {
if (!/image/.test(mime)) return EulaReply(example("dengan mengirim foto"))
await EulaReply(msg.wait)
var fotonya = await Eula.downloadAndSaveMediaMessage(qmsg)
var urlimage = await telegraPh(fotonya)
await EulaReply(`Link Tautan :\n${urlimage}`)
await fs.unlinkSync(fotonya)
}
break
case "public": {
if (!isOwner) return EulaReply(msg.owner)
Eula.public = true
EulaReply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Public*")
}
break
case "self": {
if (!isOwner) return EulaReply(msg.owner)
Eula.public = false
EulaReply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Self*")
}
break
case "get": {
if (!isOwner) return EulaReply(msg.owner)
if (!text) return EulaReply("linknya")
try {
var check = await fetchJson(text)
EulaReply(JSON.stringify(check, null, 2))
} catch (e) {
return EulaReply(e.toString())
}}
break
case "instagram": case "igdl": case "ig": {
if (!text) return EulaReply(example("linknya"))
if (!text.includes("instagram.com")) return EulaReply("Link tautan tidak valid!")
EulaReply(msg.wait)
await api.igdl(`${text}`).then((res) => {
for (let a of res.result) {
Eula.sendMedia(m.chat, a.url, m, {
caption: "*Instagram Downloader ✅*"})
}
}).catch(e => EulaReply(e.toString()))
}
break
case "tiktokaudio": case "tiktokmp3": case "ttaudio": case "ttmp3": {
if (!text) return EulaReply(example("linknya"))
if (!text.includes("tiktok.com")) return EulaReply("Link tautan tidak valid!")
EulaReply(msg.wait)
await api.tiktok(`${text}`).then((res) => {
Eula.sendMessage(m.chat, {audio: {url: res.result.music}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch(e => EulaReply(e.toString()))
}
break
case "mediafire": {
if (!text) return EulaReply(example("linknya"))
if (!text.includes('mediafire.com')) return EulaReply("Link Tautan Tidak Valid!")
EulaReply(msg.wait)
await api.mediafireDl(text).then((res) => {
if (res.filesize.includes("GB")) return EulaReply("Gagal mendownload, ukuran file terlalu besar")
if (res.filesize.split("MB")[0] >= 100) return EulaReply("Gagal mendownload, ukuran file terlalu besar")
if (res.url == "") return EulaReply(msg.error)
Eula.sendMessage(m.chat, {document: {url: res.url}, fileName: res.filename, mimetype: "application/"+res.ext.toLowerCase(), caption: "*Mediafire Downloader ✅*"}, {quoted: m})
}).catch((e) => EulaReply(e.toString()))
}
break
case "ssweb": {
if (!text) return EulaReply(example("linknya"))
if (!text.startsWith("https://")) return EulaReply("Link Tautan Tidak Valid!")
await EulaReply(msg.wait)
try {
let imagenya = await getBuffer(`https://widipe.com/sshp?url=${text}`)
return Eula.sendMessage(m.chat, {image: imagenya, caption: msg.done}, {quoted: m})
} catch (e) {
return EulaReply(msg.error)
}
}
break
case "pinterest": case "pin": {
if (!text) return EulaReply(example("makanan"))
EulaReply(global.msg.wait)
let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url)
if (res.length == 0) return EulaReply("Error, Foto Tidak Ditemukan")
if (res.length < 5) {
anuan = res
} else {
anuan = res.slice(0,5)
}
let anu = new Array()
for (let ii of anuan) {
let imgsc = await prepareWAMessageMedia({ image: await fetch(`${ii}`)}, { upload: Eula.waUploadToServer })
anu.push({
              header: proto.Message.InteractiveMessage.Header.fromObject({
              title: `Result Foto Ke *${anuan.indexOf(ii) + 1}*`, 
                hasMediaAttachment: true,
                ...imgsc
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {                  
                   name: "cta_url",
                   buttonParamsJson:  `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${ii}\",\"merchant_url\":\"https://www.google.com\"}`
                  }
                ]
              }), 
              footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
})
            })
}

const msgii = await generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: "🔎 Berikut Adalah Hasil Pencarian Foto Dari *Pinterest*"
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: anu
        })
      })
    }
  }
}, {userJid: m.sender, quoted: m})
 
await Eula.relayMessage(m.chat, msgii.message, {
  messageId: msgii.key.id
})
}
break
case "getcase": {
if (!isOwner) return EulaReply(msg.owner)
if (!text) return EulaReply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./Eula.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
EulaReply(`${getcase(q)}`)
} catch (e) {
return EulaReply(`Case *${text}* Tidak Ditemukan`)
}
}
break
case "tiktok": case "tt": {
if (!text) return EulaReply(example('linknya'))
if (!/tiktok.com/.test(text)) return EulaReply("Link Tautan Tidak Valid!")
EulaReply(msg.wait)
 let anuan = text
await api.tiktok(anuan).then(async (res) => {
var cap = `*Tiktok Downloader ✅*`
if (res.result.duration == 0) {
if (res.result.images.length > 1) {
let araara = new Array()
let urutan = 0
for (let a of res.result.images) {
let imgsc = await prepareWAMessageMedia({ image: await fetch(`${a}`)}, { upload: Eula.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "Berikut Adalah Foto Hasil Result Dari *Tiktok Slide* ⬇️"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
Eula.sendMessage(m.chat, {image: {url: result.data.images[0]}, caption: cap}, {quoted: m})
}
} else {
let vidnya = await prepareWAMessageMedia({ video: await fetch(`${res.result.play}`)}, { upload: Eula.waUploadToServer })
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: cap
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...vidnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
name: "quick_reply",
buttonParamsJson: `{\"display_text\":\"Tiktok Audio\",\"title\":\"Audio Mp3\",\"id\":\".tiktokmp3 ${text}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
}).catch(e => EulaReply(`${e}`))
}
break
case "facebook": case "fb": case "fbdl": {
if (!text) return EulaReply(example("linkvidionya"))
if (!/facebook.com/.test(text)) return EulaReply("Link Tautan Tidak Valid!")
EulaReply(msg.wait)
await fetchJson(`https://widipe.com/download/fbdown?url=${text}`).then((res) => {
if (!res.status) return EulaReply(JSON.stringify(res, null, 2))
Eula.sendMessage(m.chat, {video: {url: `${res.result.url.isHdAvailable == true ? res.result.url.urls[0].hd : res.result.url.urls[0].sd}`}, mimetype: 'video/mp4', caption: `*Facebook Downloader ✅*`}, {quoted: m})
}).catch(e => EulaReply(e.toString()))
}
break
case "owner": {
Eula.sendContact(m.chat, [owner], "Telfon/VC = Blokir", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: await fs.readFileSync("./media/owner.jpg"), 
title: `© Copyright ${global.namabot}`, 
renderLargerThumbnail: true, 
sourceUrl: global.linkgc, 
mediaType: 1
}}})
}
break
case "welcome": {
if (!isGroup) return EulaReply(msg.group)
if (!isOwner && !isAdmin) return EulaReply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.thumb, 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot}`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Antilink Options || Status : ${antilink.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Antilink", description: "Pilih Opsi Ini Untuk Mengaktifkan Antilink", id: ".antilink on" }, 
{ title: "OFF Antilink", description: "Pilih Opsi Ini Untuk Mematikan Antilink", id: ".antilink off" }]
}, 
{
title: "AntilinkV2 Options || Status : ${antilink2.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON AntilinkV2", description: "Pilih Opsi Ini Untuk Mengaktifkan AntilinkV2", id: ".antilinkv2 on" }, 
{ title: "OFF AntilinkV2", description: "Pilih Opsi Ini Untuk Mematikan AntilinkV2", id: ".antilinkv2 off" }]
}, 
{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (welcome.includes(m.chat)) return EulaReply("Welcome Di Grup Ini Sudah Aktif")
await welcome.push(m.chat)
await fs.writeFileSync("./all/database/welcome.json", JSON.stringify(welcome))
let teksnya = `*Welcome Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!welcome.includes(m.chat)) return EulaReply("Grup Ini Tidak Terdaftar Di Database Welcome")
let posi = welcome.indexOf(m.chat)
await welcome.splice(posi, 1)
await fs.writeFileSync("./all/database/welcome.json", JSON.stringify(welcome))
let teksnya = `*Welcome Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case "antilink": {
if (!isGroup) return EulaReply(msg.group)
if (!isOwner && !isAdmin) return EulaReply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.thumb, 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot}`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Antilink Options || Status : ${antilink.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Antilink", description: "Pilih Opsi Ini Untuk Mengaktifkan Antilink", id: ".antilink on" }, 
{ title: "OFF Antilink", description: "Pilih Opsi Ini Untuk Mematikan Antilink", id: ".antilink off" }]
}, 
{
title: "AntilinkV2 Options || Status : ${antilink2.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON AntilinkV2", description: "Pilih Opsi Ini Untuk Mengaktifkan AntilinkV2", id: ".antilinkv2 on" }, 
{ title: "OFF AntilinkV2", description: "Pilih Opsi Ini Untuk Mematikan AntilinkV2", id: ".antilinkv2 off" }]
}, 
{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (antilink.includes(m.chat)) return EulaReply("Antilink Di Grup Ini Sudah Aktif!")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
}
await antilink.push(m.chat)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
let teksnya = `*Antilink Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!antilink.includes(m.chat)) return EulaReply("Grup Ini Tidak Terdaftar Di Database Antilink")
let posi = antilink.indexOf(m.chat)
await antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
let teksnya = `*Antilink Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case "antilinkV2": case "antilinkv2": {
if (!isGroup) return EulaReply(msg.group)
if (!isOwner && !isAdmin) return EulaReply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.thumb, 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot}`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Antilink Options || Status : ${antilink.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Antilink", description: "Pilih Opsi Ini Untuk Mengaktifkan Antilink", id: ".antilink on" }, 
{ title: "OFF Antilink", description: "Pilih Opsi Ini Untuk Mematikan Antilink", id: ".antilink off" }]
}, 
{
title: "AntilinkV2 Options || Status : ${antilink2.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON AntilinkV2", description: "Pilih Opsi Ini Untuk Mengaktifkan AntilinkV2", id: ".antilinkv2 on" }, 
{ title: "OFF AntilinkV2", description: "Pilih Opsi Ini Untuk Mematikan AntilinkV2", id: ".antilinkv2 off" }]
}, 
{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (antilink2.includes(m.chat)) return EulaReply("AntilinkV2 Di Grup Ini Sudah Aktif")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
}
await antilink2.push(m.chat)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
let teksnya = `*AntilinkV2 Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!antilink2.includes(m.chat)) return EulaReply("Grup Ini Tidak Terdaftar Di Database AntilinkV2")
let posi = antilink2.indexOf(m.chat)
await antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
let teksnya = `*AntilinkV2 Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case "autoread": {
if (!isOwner) return EulaReply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Bot Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.thumb, 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot}`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Autoread Options || Status : ${global.autoread ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoread", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoread", id: ".autoread on" }, 
{ title: "OFF Autoread", description: "Pilih Opsi Ini Untuk Mematikan Autoread", id: ".autoread off" }]
}, 
{
title: "Autoreadsw Options || Status : ${global.autoreadsw ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoreadsw", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoreadsw", id: ".autoreadsw on" }, 
{ title: "OFF Autoreadsw", description: "Pilih Opsi Ini Untuk Mematikan Autoreadsw", id: ".autoreadsw off" }]
}, 
{
title: "Anticall Options || Status : ${global.anticall ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Anticall", description: "Pilih Opsi Ini Untuk Mengaktifkan Anticall", id: ".anticall on" }, 
{ title: "OFF Anticall", description: "Pilih Opsi Ini Untuk Mematikan Anticall", id: ".anticall off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (global.autoread) return EulaReply("Autoread Sudah Aktif")
global.autoread = true
let teksnya = `*Autoread Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!global.autoread) return EulaReply("Autoread Sudah Tidak Aktif")
global.autoread = false
let teksnya = `*Autoread Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case "autoreadsw": {
if (!isOwner) return EulaReply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Bot Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.thumb, 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot}`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Autoread Options || Status : ${global.autoread ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoread", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoread", id: ".autoread on" }, 
{ title: "OFF Autoread", description: "Pilih Opsi Ini Untuk Mematikan Autoread", id: ".autoread off" }]
}, 
{
title: "Autoreadsw Options || Status : ${global.autoreadsw ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoreadsw", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoreadsw", id: ".autoreadsw on" }, 
{ title: "OFF Autoreadsw", description: "Pilih Opsi Ini Untuk Mematikan Autoreadsw", id: ".autoreadsw off" }]
}, 
{
title: "Anticall Options || Status : ${global.anticall ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Anticall", description: "Pilih Opsi Ini Untuk Mengaktifkan Anticall", id: ".anticall on" }, 
{ title: "OFF Anticall", description: "Pilih Opsi Ini Untuk Mematikan Anticall", id: ".anticall off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (global.autoreadsw) return EulaReply("Autoreadsw Sudah Aktif")
global.autoreadsw = true
let teksnya = `*Autoreadsw Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!global.autoreadsw) return EulaReply("Autoreadsw Sudah Tidak Aktif")
global.autoreadsw = false
let teksnya = `*Autoreadsw Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case "anticall": {
if (!isOwner) return EulaReply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Bot Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.thumb, 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot}`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Autoread Options || Status : ${global.autoread ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoread", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoread", id: ".autoread on" }, 
{ title: "OFF Autoread", description: "Pilih Opsi Ini Untuk Mematikan Autoread", id: ".autoread off" }]
}, 
{
title: "Autoreadsw Options || Status : ${global.autoreadsw ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoreadsw", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoreadsw", id: ".autoreadsw on" }, 
{ title: "OFF Autoreadsw", description: "Pilih Opsi Ini Untuk Mematikan Autoreadsw", id: ".autoreadsw off" }]
}, 
{
title: "Anticall Options || Status : ${global.anticall ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Anticall", description: "Pilih Opsi Ini Untuk Mengaktifkan Anticall", id: ".anticall on" }, 
{ title: "OFF Anticall", description: "Pilih Opsi Ini Untuk Mematikan Anticall", id: ".anticall off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (global.anticall) return EulaReply("Anticall Sudah Aktif")
global.anticall = true
let teksnya = `*Anticall Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!global.anticall) return EulaReply("Anticall Sudah Tidak Aktif")
global.anticall = false
let teksnya = `*Anticall Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case "setgc": case "statusgc": {
if (!isGroup) return EulaReply(msg.group)
if (!isOwner && !isAdmin) return EulaReply(msg.admin)
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.thumb, 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot}`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Antilink Options || Status : ${antilink.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Antilink", description: "Pilih Opsi Ini Untuk Mengaktifkan Antilink", id: ".antilink on" }, 
{ title: "OFF Antilink", description: "Pilih Opsi Ini Untuk Mematikan Antilink", id: ".antilink off" }]
}, 
{
title: "AntilinkV2 Options || Status : ${antilink2.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON AntilinkV2", description: "Pilih Opsi Ini Untuk Mengaktifkan AntilinkV2", id: ".antilinkv2 on" }, 
{ title: "OFF AntilinkV2", description: "Pilih Opsi Ini Untuk Mematikan AntilinkV2", id: ".antilinkv2 off" }]
}, 
{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "setbot": case "statusbot": {
if (!isOwner) return EulaReply(msg.owner)
let teksnya = `Silahkan Pilih Tombol Options Settingan Bot Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.thumb, 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot}`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Autoread Options || Status : ${global.autoread ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoread", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoread", id: ".autoread on" }, 
{ title: "OFF Autoread", description: "Pilih Opsi Ini Untuk Mematikan Autoread", id: ".autoread off" }]
}, 
{
title: "Autoreadsw Options || Status : ${global.autoreadsw ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoreadsw", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoreadsw", id: ".autoreadsw on" }, 
{ title: "OFF Autoreadsw", description: "Pilih Opsi Ini Untuk Mematikan Autoreadsw", id: ".autoreadsw off" }]
}, 
{
title: "Anticall Options || Status : ${global.anticall ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Anticall", description: "Pilih Opsi Ini Untuk Mengaktifkan Anticall", id: ".anticall on" }, 
{ title: "OFF Anticall", description: "Pilih Opsi Ini Untuk Mematikan Anticall", id: ".anticall off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "setppgc": {
if (!isGroup) return EulaReply(msg.group)
if (!isBotAdmin) return EulaReply(msg.adminbot)
if (!isAdmin && !isOwner) return EulaReply(msg.admin)
if (/image/g.test(mime)) {
let media = await Eula.downloadAndSaveMediaMessage(qmsg)
await Eula.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
EulaReply("*Berhasil Mengganti Foto Grup ✅*")
} else return EulaReply(example('dengan mengirim foto'))
}
break
case "setnamegc": case "setnamagc": {
if (!isGroup) return EulaReply(msg.group)
if (!isBotAdmin) return EulaReply(msg.adminbot)
if (!isAdmin && !isOwner) return EulaReply(msg.admin)
if (!text) return EulaReply(example('teksnya'))
const gcname = metadata.subject
await Eula.groupUpdateSubject(m.chat, text)
EulaReply(`*Berhasil Mengganti Nama Grup ✅*\n*${gcname}* Menjadi *${text}*`)
}
break
case "setdesc": case "setdesk": {
if (!isGroup) return EulaReply(msg.group)
if (!isBotAdmin) return EulaReply(msg.adminbot)
if (!isAdmin && !isOwner) return EulaReply(msg.admin)
if (!text) return EulaReply(example('teksnya'))
await Eula.groupUpdateDescription(m.chat, text)
EulaReply(`*Berhasil Mengganti Deskripsi Grup ✅*`)
}
break
case "open": {
if (!isGroup) return EulaReply(msg.group)
if (!isBotAdmin) return EulaReply(msg.adminbot)
if (!isAdmin && !isOwner) return EulaReply(msg.admin)
await Eula.groupSettingUpdate(m.chat, 'not_announcement')
EulaReply("*Berhasil Mengganti Setelan Grup ✅*\nMenjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {
if (!isGroup) return EulaReply(msg.group)
if (!isBotAdmin) return EulaReply(msg.adminbot)
if (!isAdmin && !isOwner) return EulaReply(msg.admin)
await Eula.groupSettingUpdate(m.chat, 'announcement')
EulaReply("*Berhasil Mengganti Setelan Grup ✅*\nMenjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "del": case "delete": {
if (isGroup) {
if (!isOwner && !isAdmin) return EulaReply(msg.admin)
if (!m.quoted) return EulaReply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
Eula.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return EulaReply(msg.adminbot)
Eula.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return EulaReply(msg.owner)
if (!m.quoted) return EulaReply(example("dengan reply pesan"))
Eula.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": {
if (!isGroup) return EulaReply(msg.group)
if (!isAdmin && !isOwner) return EulaReply(msg.admin)
if (!isBotAdmin) return EulaReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Eula.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => EulaReply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => EulaReply(err.toString()))
} else return EulaReply(example('62838XXX'))}
break
case "promote": case "promot": {
if (!isGroup) return EulaReply(msg.group)
if (!isAdmin && !isOwner) return EulaReply(msg.admin)
if (!isBotAdmin) return EulaReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Eula.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => EulaReply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => EulaReply(err.toString()))
} else return EulaReply(example('6283XXX/@tag'))}
break
case "add": case "addmember": {
if (!isGroup) return EulaReply(msg.group)
if (!args[0]) return EulaReply(example("62838XXX"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await Eula.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return EulaReply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return EulaReply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member")
var a = await Eula.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return EulaReply(`Berhasil Menambahkan ${teks.split("@")[0]} Kedalam Grup Ini`)
if (a[0].status == 408) return EulaReply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
if (a[0].status == 409) return EulaReply(`Dia Sudah Ada Di Dalam Grup Ini!`)
if (a[0].status == 403) return EulaReply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
}
break
case "kik": case "kick": {
if (!isGroup) return EulaReply(msg.group)
if (!isBotAdmin) return EulaReply(msg.adminbot)
if (!isAdmin && !isOwner) return EulaReply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Eula.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => Eula.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: qchanel})).catch((err) => EulaReply(err.toString()))
} else return EulaReply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {
if (!isGroup) return EulaReply(msg.group)
if (!isAdmin && !isOwner) return EulaReply(msg.admin)
if (!m.quoted && !text) return EulaReply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Eula.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {
if (!isGroup) return EulaReply(msg.group)
if (!isAdmin && !isOwner) return EulaReply(msg.admin)
if (!text) return EulaReply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
Eula.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "savekontak": {
if (!isOwner) return EulaReply(msg.owner)
if (!isGroup) return EulaReply(msg.group)
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
EulaReply(err.toString())
} finally {
if (m.chat !== m.sender) await EulaReply(`*Berhasil Savekontak ✅*
File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await Eula.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `*File Contact Berhasil Di Buat ✅*\n
Total ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "savekontak2": {
if (!isOwner) return EulaReply(msg.owner)
if (!text) return EulaReply(example("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup"))
var idnya = text
var groupMetadataa
try {
groupMetadataa = await Eula.groupMetadata(`${idnya}`)
} catch (e) {
return EulaReply("*ID Grup* tidak valid!")
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
EulaReply(err.toString())
} finally {
if (m.chat !== m.sender) await EulaReply(`*Berhasil Savekontak ✅*
File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await Eula.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `*File Kontak Berhasil Di Buat ✅*\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak": {
if (!isOwner) return EulaReply(msg.owner)
if (!isGroup) return EulaReply(msg.group)
if (!text) return EulaReply(example("pesannya"))
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let time = ms(delaypushkontak * Number(halls.length))
await EulaReply(`*Memproses Pengiriman Pesan ⏳*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await Eula.sendMessage(mem, {text: teks}, {quoted: qchanel})
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
EulaReply(err.toString())
} finally {
if (m.chat !== m.sender) await EulaReply(`*Berhasil Pushkontak ✅*
File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await Eula.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak1": {
if (!isOwner) return EulaReply(msg.owner)
if (!text) return EulaReply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
if (!text.split("|")) return EulaReply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await Eula.groupMetadata(`${idnya}`)
} catch (e) {
return EulaReply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let time = ms(delaypushkontak * Number(halls.length))
await EulaReply(`*Memproses Pengiriman Pesan ⏳*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await Eula.sendMessage(mem, {text: teks}, {quoted: qchanel})
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
EulaReply(err.toString())
} finally {
if (m.chat !== m.sender) await EulaReply(`*Berhasil Pushkontak ✅*
File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await Eula.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak2": {
if (!isOwner) return EulaReply(msg.owner)
if (!text) return EulaReply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return EulaReply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return EulaReply("Format ID Grup Tidak Valid")
if (isNaN(delay)) return EulaReply("Format Delay Tidak Valid")
if (!teks) return EulaReply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await Eula.groupMetadata(`${idnya}`)
} catch (e) {
return EulaReply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let time = ms(delay * Number(halls.length))
await EulaReply(`*Memproses Pengiriman Pesan ⏳*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await Eula.sendMessage(mem, {text: teks}, {quoted: qchanel})
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
EulaReply(err.toString())
} finally {
if (m.chat !== m.sender) await EulaReply(`*Berhasil Pushkontak ✅*
File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await Eula.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "idgc": {
if (!isOwner) return EulaReply(msg.owner)
if (!isGroup) return EulaReply(msg.group)
EulaReply(`${m.chat}`)
}
break
case "listgc": case "cekidgc": case"listgrup": {
let gcall = Object.values(await Eula.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
Eula.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkgc, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "joingc": case "join": {
if (!isOwner) return EulaReply(msg.owner)
if (!text && !m.quoted) return EulaReply(example('linknya'))
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return EulaReply("Link Tautan Tidak Valid!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await Eula.groupAcceptInvite(result).then(respon => EulaReply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => EulaReply(error.toString()))
}
break
case "leave": case "leavegc": {
if (!isOwner) return EulaReply(msg.owner)
if (!isGroup) return EulaReply(msg.group)
await EulaReply("Otw Bosss")
await sleep(3000)
await Eula.groupLeave(m.chat)
}
break
case "leavegc2": case "leave2": {
if (!isOwner) return EulaReply(msg.owner)
let gcall = await Object.values(await Eula.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Command :*\nKetik *${cmd}* nomor grup\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
Eula.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkgc, previewType: "PHOTO"}}}, {quoted: qchanel})
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return EulaReply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await EulaReply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await Eula.groupLeave(`${gcall[leav].id}`)
}}
break
case "rst": case "restartbot": {
if (!isOwner) return EulaReply(msg.owner)
await EulaReply("Memproses Restart Bot . . .")
execSync("npm restart")
}
break
case "backup": {
if (!isOwner) return EulaReply(msg.owner)
EulaReply("Memproses Pengambilan Scriptbot")
let a = getTime().split("T")[1].split("+")[0]
var name = `Eula⚡`
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
await Eula.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return EulaReply("Scriptbot Berhasil Dikirim Ke Chat Pribadi")
}
break
case "done": {
if (isGroup) return EulaReply(msg.private)
if (!isOwner) return EulaReply(msg.owner)
if (!text) return EulaReply(example("Panel Unlimited"))
let teksnya = `
*📦 ${text}*
*⏰ ${tanggal(Date.now())}*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Eula.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "jpmhidetag": case "jpmht": {
if (!isOwner) return EulaReply(msg.owner)
if (!text && !m.quoted) return EulaReply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await Eula.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
let time = ms(delayjpm * Number(usergc.length))
await EulaReply(`Memproses Mengirim Pesan Hidetag Teks Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
var ments = []
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: ments, 
externalAdReply: {
showAdAttribution: false }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})}
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
ments = getGroups[jid].participants.map(e => e.id)
await Eula.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
EulaReply(`Berhasil Mengirim Pesan Hidetag Teks Ke *${total} Grup*`)
}
break
case "jpmhidetag2": case "jpmht2": {
if (!isOwner) return EulaReply(msg.owner)
if (!text) return EulaReply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return EulaReply(example("teksnya dengan balas/kirim foto"))
let image = await Eula.downloadAndSaveMediaMessage(qmsg)
var teks = text
let total = 0
let getGroups = await Eula.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
let time = ms(delayjpm * Number(usergc.length))
await EulaReply(`Memproses Mengirim Pesan Hidetag Teks & Foto Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
var ments = []
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: ments, 
externalAdReply: {
showAdAttribution: false }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
ments = getGroups[jid].participants.map(e => e.id)
await Eula.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
EulaReply(`Berhasil Mengirim Pesan Hidetag Teks & Foto Ke *${total} Grup*`)
}
break
case "jpm": {
if (!isOwner) return EulaReply(msg.owner)
if (!text && !m.quoted) return EulaReply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await Eula.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
let time = ms(delayjpm * Number(usergc.length))
await EulaReply(`Memproses Mengirim Pesan Teks Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: false }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await Eula.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
EulaReply(`Berhasil Mengirim Pesan Teks Ke *${total} Grup*`)
}
break
case "jpm2": {
if (!isOwner) return EulaReply(msg.owner)
if (!text) return EulaReply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return EulaReply(example("teksnya dengan balas/kirim foto"))
let image = await Eula.downloadAndSaveMediaMessage(qmsg)
let total = 0
let getGroups = await Eula.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
let time = ms(delayjpm * Number(usergc.length))
await EulaReply(`Memproses Mengirim Pesan Teks & Foto Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: false }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: text
}), header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync(image)}, { upload: Eula.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await Eula.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
EulaReply(`Berhasil Mengirim Pesan Teks & Foto Ke *${total} Grup*`)
}
break
case "sendpayment": case "payment": case "pay": case "listpayment": {
if (!isOwner) return EulaReply(msg.owner)
let imgsc = await prepareWAMessageMedia({ image: await global.thumb }, { upload: Eula.waUploadToServer })
let imgqr = await prepareWAMessageMedia({ image: await global.qris}, { upload: Eula.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "Pilih *Payment Pembayaran* Yang Tersedia Di Bawah Ini ⬇️"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Dana Payment*

*Nomor :* ${global.dana}`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Nomor Dana\",\"id\":\"123456789\",\"copy_code\":\"${global.dana}\"}`
}]
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*OVO Payment*

*Nomor :* ${global.ovo}`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Nomor Ovo\",\"id\":\"123456789\",\"copy_code\":\"${global.ovo}\"}`
}]
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Gopay Payment*

*Nomor :* ${global.gopay}`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Nomor Gopay\",\"id\":\"123456789\",\"copy_code\":\"${global.gopay}\"}`
}]
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*QRIS All Payment*

Scan Foto QRIS All Payment Diatas Ini`, 
hasMediaAttachment: true,
...imgqr
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${global.linkqris}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
})
}]
})
})}
}}, {userJid: m.sender, quoted: qchanel})
await Eula.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Eula.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Eula.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Eula.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Eula.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Eula.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Eula.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
Eula.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}

Command From : ${m.sender.split("@")[0]}`}, {quoted: m})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})