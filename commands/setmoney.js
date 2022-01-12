const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return message.reply("**Only bot administrators are authorized to send and set money.**"); // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Please specify a user dude!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Please specify a valid amount.");
    let data = client.eco.setMoney(user.id, parseInt(amount));
    
    const embed = new MessageEmbed()
        .setTitle(`Money Updated!`)
        .addField(`User`, `<@${data.user}>`)
        .addField(`Total Amount`, data.after)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "setmoney",
    aliases: ["setbal","set","SET","SETMONEY"],
    usage: `setmoney @user <amount>`
}
