const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(`${message.author.id}10`);
    let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    const embed = new MessageEmbed()
        .setTitle(`**🏦 BANK 🏦**`)
        .addField(`Bank Balance`, `**${userBalanceformat}**💶`)
        .addField(`Usage`,`Deposit \`${client.prefix} deposit\` \nWithdraw \`${client.prefix} withdraw\``)
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
