//Coded by Tharindu Liyanage
// Edit This File 
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons
// 👈 You Can change this your choice
global.list = ('لائحة الأوامر 🧬')
global.allmenu = ('كل الاوامر 🎉')
global.script = ('🤔 السكربت')
global.owner = ('المالك 🦋')
global.deploy = ('الرفع 🐥')
global.project = ('المشروع 🦋')
global.donate = ('التبرع 🚀')
global.stop = ('توقف 🛑')
global.skip = ('تخطي ⏩')
global.thanks = ('*You are welcome أهلا بك 💙*')
// 👈 You Can change this your choice
global.nextimg = ('الصورة التالية ➡️')
global.audio = ('🎶 اوديو')
global.video = ('فيديو 📽')
global.yts = ('بحت اليوتيوب 🌐')
global.play = ('إبدأ 🍿')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
