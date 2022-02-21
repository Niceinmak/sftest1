const { MessageEmbed } = require("discord.js");
const btcValue = require('btc-value');
exports.execute = async (client, message, args) => {
  let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let ecocoin=0
    let amount = Math.floor(Math.random() * 200)+50;
    let amount3 = args[0]
    btcValue().then(value => {
      let value1=value
      value1 = value1.toString().slice(0,3);
    ecocoin=value1
        const embed = new MessageEmbed()
        .setTitle(`**EcoCoin🌿**`)
        .setDescription(`**EcoCoin instant price:** \`${ecocoin}\``)
        .addField(`\`Note\`**This coin can only be used in-game.**`,)
  message.channel.send(embed);
});

  
}

exports.help = {
    name: "ecocoin",
    aliases: ["ECOCOIN","eco"],
    usage: `ecocoin`
}
