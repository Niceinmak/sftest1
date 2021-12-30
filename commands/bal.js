const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`Hesabın`)
        .addField(`Kullanıcı`, `<@${userBalance.user}>`)
        .addField(`Para`, `**${userBalance.amount}**💶`)
        .addField(`Pozisyon`, userBalance.position)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "bal",
    aliases: ["money", "cash", "balance"],
    usage: `bal`
}
