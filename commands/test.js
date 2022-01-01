const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let data=message.client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)
    const embed = new MessageEmbed()
        .setTitle(`${message.client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)}`)
    return message.channel.send(embed);
}

exports.help = {
    name: "test",
    aliases: ["h","t"],
    usage: `test`
}
