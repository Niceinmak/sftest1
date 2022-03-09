const { MessageEmbed } = require("discord.js");
const btcValue = require('btc-value');
exports.execute = async (client, message, args) => {
  let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let arg = args.join(" ");
    const embed = new MessageEmbed()
        .setTitle(`Test`)
  message.channel.send(embed);
  
}

exports.help = {
    name: "test2",
    aliases: [],
    usage: `test2`
}
