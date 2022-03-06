const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return message.reply("**Only bot administrators.**"); // return if author isn't bot owner
  let serverformat=String(client.guilds.cache.size).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let userformat=String(client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)).replace(/(.)(?=(\d{3})+$)/g,'$1,')
const embed = new MessageEmbed()
        .setTitle(`Bot Info`)
       .addField(`Servers:`,serverformat)
       .addField(`Users:`,userformat)
  message.channel.send(embed);
}

exports.help = {
    name: "botinfo",
    aliases: ["botinfo","BOTINFO"],
    usage: `botinfo`
}
