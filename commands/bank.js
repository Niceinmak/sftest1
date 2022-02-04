const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(`${message.author.id}1`);
    let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    const embed = new MessageEmbed()
        .setTitle(`**🏦 BANK 🏦**`)
        .addField(`Bank Balance`, `**${userBalanceformat}**💶`)
        .addField(`Position`, userBalance.position)
        .addField(`Position`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "bank",
    aliases: ["BANK"],
    usage: `bank`
}
