const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return; // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Sadece yetkili kişiler para gönderebilir!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Lütfen geçerli bir değer girin.");
    let data = client.eco.addMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Para eklendi!`)
        .addField(`Kullanıcı`, `<@${data.user}>`)
        .addField(`Gönderilen para`, `${data.amount} 💸`)
        .addField(`Toplam para`, data.after)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "addmoney",
    aliases: ["addbal","add"],
    usage: `addmoney @user <amount>`
}
