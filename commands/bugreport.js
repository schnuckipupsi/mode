const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let channel = bot.channels.get("761922817020919818")
let embed = new Discord.RichEmbed()
.setTitle("Bug Report")
.setThumbnail("https://discordapp.com/attachments/761922817020919818/762327505951916072/PicsArt_09-27-02.13.50.png")
.addField("Bug", bug)
.addField("Reported By", user)
.addField("Reported in", guild)
.setColor("#f49542")

message.channel.send("**| Your bug has been reported in the official server. It will be reviewed so please be patient.**")
channel.send(embed).then(i => i.react("⏳"))

  


}
module.exports.help = {
name: "bugreport"
}
