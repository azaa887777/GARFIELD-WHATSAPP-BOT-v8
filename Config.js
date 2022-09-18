// 👈 You Can change this your choice 
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['⁦🇲🇦⁩'] // 👈 Enter your Emoji 
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ` *Hi 🥰 👋*
*welcome to ᠻꪊꪀ-᥇ꪮ𝓽-ꪜꪖ𝘳 مرحبا بكم في*
*follow me in fb https://www.facebook.com/profile.php?id=100083775833979 *
*From Morocco ⁦🇲🇦⁩ من المغرب*
* يرجى إستخدام البوت بشكل سليم ليدوم لأطول مدة ⁦🤷🏻‍♂️⁩ *
* Use the robot with caution to last longer ⁦🤷🏻‍♂️⁩ *
*تابعني على الفيسبوك 😔 - https://www.facebook.com/profile.php?id=100083775833979`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['212693108847'] //👈  Enter Your number
global.premium =  ['212693108847'] //👈  Enter Your number
global.ownernomer = '212693108847' //👈  Enter Your number
global.ownername = 'ᠻꪊꪀ-᥇ꪮ𝓽-ꪜꪖ𝘳' //👈 Enter Your name
global.botname = 'ᠻꪊꪀ-᥇ꪮ𝓽-ꪜꪖ𝘳' //👈 Enter Your Bot name
global.footer = '© ᠻꪊꪀ-᥇ꪮ𝓽-ꪜꪖ𝘳' //👈 Enter Your Name
global.ig = 'follow me https://www.facebook.com/profile.php?id=100083775833979' // 👈 You Can change this your choice
global.region = 'morocco, 🇲🇦, 🇲🇦' // 👈 You Can change this your choice
global.sc = 'تواصل مع صاحب البوت إذا كنت تريد السكربت بارسال owner.'
global.fbt = 'Follw Us ℹ️' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://www.facebook.com/profile.php?id=100083775833979'// 👈 Enter your Social media link to follow now button
global.welcome = '*Welcome To The Group أهلا بك في المجموعة 🦋*' // 👈 You Can change this your choice
global.bye = '*Bye bye Mother fucker 🐼*' // 👈 You Can change this your choice
global.packname = 'ᠻꪊꪀ-᥇ꪮ𝓽-ꪜꪖ𝘳'  // 👈 You Can change this your choice 
global.author = 'ᠻꪊꪀ-᥇ꪮ𝓽-ꪜꪖ𝘳' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.imgur.com/6q8xOxF.jpeg' 
global.spoty = 'https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: '*تم* 🦋', // 👈 You Can change this your choice
    admin: '*فقط الادمن من يمكنه التحكم في هذه الخاصية* !', // 👈 You Can change this your choice
    botAdmin: 'يرجى إعطائي صلاحيات الادمن لإستعمال هذا الامر!', // 👈 You Can change this your choice
    owner: '*فقط مالك البوت من يمكنه التحكم في هذا الخيار* !', // 👈 You Can change this your choice
    group: 'يستخدم هذا الامر فقط في المجموعات!', // 👈 You Can change this your choice
    private: 'Features Used Only For Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '```Please Wait يرجى الإنتظار...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
/// Do Not Change 👇 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
