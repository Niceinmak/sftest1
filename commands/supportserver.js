const { MessageEmbed } = require("discord.js");
//const { MessageButton } = require('discord-buttons')
exports.execute = async (client, message, args) => {
  let userid=message.author.id
    const embed = new MessageEmbed()
        .setAuthor("Support Server")
        .setTitle("EcoVerse Support Server")
     //   .setURL("https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ")
        .setDescription(`**Please press the button below to join to the support server!**
        \`Thanks for joining\``)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
  message.channel.send({ embed: embed })
}

exports.help = {
    name: "supportserver",
    aliases: ["SUPPORTSERVER"],
    usage: `supportserver`
}
