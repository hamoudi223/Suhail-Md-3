const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Mali";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "22547869771";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22395064497";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_45_06_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICA5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3LFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDcwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDg3LFxuICAgICAgICA1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTExLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYyLFxuICAgICAgICA0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBRd01DVFNkWjl3QmVmUDNqbU9KM2Q5ck9aa2tlVm80WmJiMG85SHBreDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZZREZYNEFsUUZPOWtaYzRkYXZ6REFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODNhYTVhMmUtZmI2MC00MTE1LWFiNTQtZjIzYTc1ZjBhYmY4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDE2OSxcbiAgICAgIDgwLFxuICAgICAgMTIxLFxuICAgICAgMjQ1LFxuICAgICAgMTIzLFxuICAgICAgOTQsXG4gICAgICA0NixcbiAgICAgIDI0NSxcbiAgICAgIDcsXG4gICAgICAzNCxcbiAgICAgIDE5NSxcbiAgICAgIDI1MyxcbiAgICAgIDE5LFxuICAgICAgMjI2LFxuICAgICAgNDEsXG4gICAgICAyOCxcbiAgICAgIDIxLFxuICAgICAgMTA5LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDEwNSxcbiAgICAgIDExOCxcbiAgICAgIDUxLFxuICAgICAgMjAyLFxuICAgICAgODEsXG4gICAgICAxMjYsXG4gICAgICAyMTYsXG4gICAgICAyMzIsXG4gICAgICAxMTEsXG4gICAgICA1MixcbiAgICAgIDIwOCxcbiAgICAgIDEyNixcbiAgICAgIDIzOCxcbiAgICAgIDE2MCxcbiAgICAgIDY2LFxuICAgICAgMjMyLFxuICAgICAgMjI1LFxuICAgICAgNzMsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQU2t6YllGRU91aytzSUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9CQlg5UU8ySExJcldNbEtHb3I4TU9SK29vNU5aeUJpb2NZMWhLd0dKVGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK1hESEtxNC9La3Jjc3lmVS9EQjN1TFRCS3Q2RlNNRDNGYzNTeGVRSkVXRzlKQnhxRUJhUnVXYThrcXdJbkllSkxtSWxCL2RPdVdDblZ4ZWFkWERiQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRlZqdlBqcDY2clZKdmpwMFQzZDhPS2F6REhLOHJic1JQaGdPZzd2b21XRHA4U2hNUTQ2Q2NvSkdjYmwwOEc2T1NQS0hxUWNFUVNkMWFweXNxQjVERHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjM5NTA2NDQ5Nzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzI1NDU5MDc0OTQ5Mjc6OEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJzdmVuXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjM5NTA2NDQ5Nzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTEwMjgzMzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFISC9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhIX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsNDBrY0IwZDB2Z05mQTc4NnhaWDdXaUFvNnhoaVlBbGlvNVAzT2hQTXZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTY2ODk3ODAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDkwMTc5NjM2MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "~",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
