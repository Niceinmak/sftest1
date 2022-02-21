const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(`${message.author.id}11`);
    let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    const embed = new MessageEmbed()
        .setTitle(`**EcoCoin🌿**`)
        .setDescription(`**EcoCoin: \`${userBalanceformat}\`**`)
        .addField(`Usage`,`Buy \`${client.prefix} buyeco\` \nSell\`${client.prefix} selleco\``)
        .addField(`\`Note\` **This coin can only be used in-game.**`,`**Cannot be bought and sold in real life**`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "ecoinv",
    aliases: ["ECOINV","ecoinventory"],
    usage: `ecoinv <user>`
}
