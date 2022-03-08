const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200)+50;
  client.db.delete(`animals_${message.author.id}`)
    let amount3 = args[0]
    const embed = new MessageEmbed()
        .setTitle(`Test`)
  message.channel.send(embed);
  
}

exports.help = {
    name: "battle",
    aliases: ["BATTLE"],
    usage: `battle <user/null>`
}
