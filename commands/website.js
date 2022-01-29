const { MessageEmbed } = require("discord.js");
const { MessageButton } = require('discord-buttons')
exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setTitle(`Website link is here!`)
      let website = new MessageButton()
  .setStyle('url')
    .setURL("http://ecoverse.ml/")
  .setLabel(`Go to website`) 
  .setDisabled(false);
  message.channel.send({ buttons: [website], embed: embed })
  
}

exports.help = {
    name: "website",
    aliases: ["web","WEBSITE"],
    usage: `website`
}
