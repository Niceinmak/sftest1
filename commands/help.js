const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor("Komutlar")
        .setTitle("Sofait Bot Komutları")
     //   .setURL("https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ")
        .setDescription(`Komut Sayısı: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
  let economyname=""
  let economyaliases=""
  let economyusage=""
  let economyfull=""
 /*   client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Komut: ${cmd.help.aliases.join(", ") || "None"}\nKullanım: \`${client.prefix}${cmd.help.usage}\``, true);
    }); */
  client.commands.forEach(cmd => {
     //   embed.addField(`\`${client.prefix}${cmd.help.usage}\``,true);
    economyfull+=`\`${client.prefix}${cmd.help.usage}\``
    }); 
  embed.setDescription(economyfull);
    return message.channel.send(embed);
}

exports.help = {
    name: "help",
    aliases: ["h"],
    usage: `help`
}
