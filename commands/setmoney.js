const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return; // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Sadece yetkili kişiler dostum!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Lütfen geçerli bir miktar giriniz.");
    let data = client.eco.setMoney(user.id, parseInt(amount));
    
    const embed = new MessageEmbed()
        .setTitle(`Para güncellendi!`)
        .addField(`Kullanıcı`, `<@${data.user}>`)
        .addField(`Toplam para`, data.after)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "setmoney",
    aliases: ["setbal","set"],
    usage: `setmoney @user <amount>`
}
