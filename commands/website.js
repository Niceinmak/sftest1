const { MessageEmbed } = require("discord.js");
//const { MessageButton } = require('discord-buttons')
exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
  message.channel.send({ embed: embed })
  
}

exports.help = {
    name: "website",
    aliases: ["web","WEBSITE"],
    usage: `website`
}
